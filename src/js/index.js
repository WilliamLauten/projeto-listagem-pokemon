//asuduasda

const botaoAlterarTema = document.getElementById("botao-alterar-tema");

const body = document.querySelector("body");

const imagemBotaoTrocaDeTema = document.querySelector(".imagem-botao");

botaoAlterarTema.addEventListener("click", () => {
    const modoEscuroEstaAtivo = body.classList.contains("modo-escuro");

    body.classList.toggle ("modo-escuro");

    if (modoEscuroEstaAtivo) {
       //without toogle - body.classList.remove("modo-escuro");
        imagemBotaoTrocaDeTema.setAttribute("src", "./src/imagens/sun.png");

    } else {
       //without toogle - body.classList.add("modo-escuro");
        imagemBotaoTrocaDeTema.setAttribute("src", "./src/imagens/moon.png");
    }
});
