const loginForm = document.getElementById("loginForm");
const cadastroForm = document.getElementById("cadastroForm");

const toLogin = document.getElementById("toLogin");
const toCadastro = document.getElementById("toCadastro");

toLogin.onclick = (e) => {
    e.preventDefault();
    loginForm.classList.add("active");
    cadastroForm.classList.remove("active");
};

toCadastro.onclick = (e) => {
    e.preventDefault();
    cadastroForm.classList.add("active");
    loginForm.classList.remove("active");
};