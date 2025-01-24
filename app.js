// Array para armazenar os nomes
let listaDeAmigos = [];

// Função para capturar o valor do campo de entrada
function capturarNomeDoCampo() {
    const campoDeEntrada = document.querySelector('#amigo');
    return campoDeEntrada.value.trim(); // Remove espaços extras
}

// Função para validar a entrada
function validarNome(nome) {
    if (!nome) {
        alert("Por favor, insira um nome.");
        return false;
    }
    return true;
}

// Função para adicionar o nome ao array de amigos
function adicionarNomeAoArray(nome) {
    listaDeAmigos.push(nome);
}

// Função para limpar o campo de entrada
function limparCampoDeEntrada() {
    const campoDeEntrada = document.querySelector('#amigo');
    campoDeEntrada.value = "";
}

// Função para atualizar a lista na tela
function atualizarListaNaTela(nome) {
    const listaDeElementos = document.querySelector('#listaAmigos');
    const novoItem = document.createElement('li');
    novoItem.textContent = nome;
    listaDeElementos.appendChild(novoItem);
}

// Função principal para adicionar amigos
function adicionarAmigo() {
    const nome = capturarNomeDoCampo();

    if (!validarNome(nome)) {
        return; // Sai da função se a validação falhar
    }

    adicionarNomeAoArray(nome);
    atualizarListaNaTela(nome);
    limparCampoDeEntrada();
}
