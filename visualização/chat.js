let contador = 1;

function enviar() {
    const input = document.getElementById("input");
    const messages = document.getElementById("messages");

    if (input.value.trim() === "") return;

    const userMsg = document.createElement("div");
    userMsg.className = "msg user";
    userMsg.innerText = input.value;
    messages.appendChild(userMsg);

    const botMsg = document.createElement("div");
    botMsg.className = "msg bot";
    botMsg.innerText = "Resposta automática";

    setTimeout(() => {
        messages.appendChild(botMsg);
        messages.scrollTop = messages.scrollHeight;
    }, 500);

    input.value = "";
    messages.scrollTop = messages.scrollHeight;
}

function novaConversa() {
    const messages = document.getElementById("messages");
    const historico = document.querySelector(".historico");

    messages.innerHTML = '<div class="msg bot">Nova conversa iniciada 👋</div>';

    const item = document.createElement("p");
    item.innerText = "Conversa " + contador;

    historico.appendChild(item);

    contador++;
}