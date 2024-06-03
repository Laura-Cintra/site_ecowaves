let inputRange = document.querySelector("#id_rating");
let inputCounter = document.querySelector(".contador");

// Função para atualizar o valor exibido
function mostrarValor() {
  inputCounter.textContent = inputRange.value;
}

// Adiciona um listener para o evento 'input'
inputRange.addEventListener("input", mostrarValor);

mostrarValor();
