//Acessando button para acessar o processo de cálculo.
const button = document.getElementById("button");
button.addEventListener('click', calcularIMC);

//Iniciando function onde estará o processo de cálculo.
function calcularIMC(){

    //Acessando elementos.
    const nome = document.getElementById("nome").value;
    const altura = Number.parseFloat(document.getElementById("altura").value);
    const peso = Number.parseFloat(document.getElementById("peso").value);
    //Acessando campo de resposta.
    let campoResposta = document.getElementById("res");

    if(nome === '' || altura === '' || peso === ''){
        alert('Preencha todos os campos!');
    }else{
        const imc = peso / (altura*altura);
        campoResposta.textContent = `Olá ${nome}! `;
        campoResposta.textContent += `O seu IMC é: ${imc.toFixed(2)}`;
    }
}

