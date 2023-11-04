

function minha_Funcao() {
    const message = 'Hello world Teste'; // Try edit me

// Update header text
document.querySelector('texto_A').innerHTML = message;

// Log to console
console.log(message);

};

function escolha_Carro() {

    var message = document.getElementById('cars').value;
    document.querySelectorAll('escolha_Carro').innerHTML = message;
    console.log("desentro de escolha o carro")


}

