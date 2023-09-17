var botao = document.getElementById("botao_produtos");

botao.addEventListener("click", function() {
  botao.style.background = "#ff0000";
  botao.style.color = "white";
  botao.style.border = "none";
  window.location.href = "Produtos.html";
});