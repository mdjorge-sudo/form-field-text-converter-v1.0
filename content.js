// Função que converte o conteúdo de um campo para minúsculas
function convertToLowercase(element) {
  if (element.tagName === "INPUT" || element.tagName === "TEXTAREA") {
    element.value = element.value.toLowerCase();
  }
}

// Monitora cliques em campos de texto e textarea
document.addEventListener("focusin", function(event) {
  convertToLowercase(event.target);
});

// Monitora a entrada de texto em tempo real e converte para minúsculas
document.addEventListener("input", function(event) {
  convertToLowercase(event.target);
});
