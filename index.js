document.addEventListener("DOMContentLoaded", () => {
    const tarefas = document.querySelectorAll(".tarefa");

    tarefas.forEach((tarefa, i) => {
        const input = tarefa.querySelector(".input-limpo");
        const botao = tarefa.querySelector(".botao-pronto");

        const valorSalvo = localStorage.getItem(`tarefa-${i}`);
        if (valorSalvo !== null) {
            input.value = valorSalvo;
        }

        input.addEventListener("input", () => {
            localStorage.setItem(`tarefa-${i}`, input.value);
        });

        botao.addEventListener("click", () => {
            input.value = "";
            localStorage.removeItem(`tarefa-${i}`);
        });
    });
});
