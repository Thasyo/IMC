//Acessando button para acessar o processo de cálculo.
const button = document.getElementById("button");
button.addEventListener('click', calcularIMC);

//Iniciando function onde estará o processo de cálculo.
function calcularIMC(){

    //Acessando elementos.
    const nome = document.getElementById("nome").value;
    const altura = document.getElementById("altura").value;
    const peso = document.getElementById("peso").value;
    //Acessando campo de resposta.
    let campoResposta = document.getElementById("box-answer");

    if(nome === '' || altura === '' || peso === ''){
        alert('Preencha todos os campos!');
    }else{
        alert("valor preenchido")
    }


}

