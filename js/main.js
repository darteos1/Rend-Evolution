const imgs= document.getElementById("img");
const img= document.querySelectorAll("#img img");

let idx=0;

function carrossel(){
    idx++;

    if(idx>img.length-1){
        idx=0;
    }
    
    imgs.style.transform='translateX(${-idx*500}px)';

}

setInterval(carrossel, 1800);



var email = document.getElementById("email")
var senha = document.getElementById("password")

// calculadora

var n1= document.querySelector('#n1')
var n2= document.querySelector('#n2')
var resultado=document.querySelector('span')

function somar(){
    resultado.innerHTML= parseFloat(n1.value) + parseFloat(n2.value)
}
function subtrair(){
    resultado.innerHTML= parseFloat(n1.value) - parseFloat(n2.value)
}
function multiplicar(){
    resultado.innerHTML= parseFloat(n1.value) * parseFloat(n2.value)
}
function dividir(){
    resultado.innerHTML= parseFloat(n1.value) / parseFloat(n2.value)
}

