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

// Slider
function disableScroll() {
    document.body.classList.add("stop-scrolling");
}

function enableScroll() {
    document.body.classList.remove("stop-scrolling");
}

document.querySelector("#items").addEventListener('wheel', event => {
    if(event.deltaY > 0) {
        event.target.scrollBy(420, 0)
    }else {
        event.target.scrollBy(-420, 0)
    }
})

// let count = 0
// setInterval(function(){
//   count += 400
//   if(count > 8000) count = 0
//   document.querySelector("#items").scrollTo(count, 0)
//   console.log('moveu')
// }, 1500)

document.querySelector("#items").addEventListener("mouseenter", event => {
    disableScroll()
})
document.querySelector("#items").addEventListener("mouseleave", event => {
    enableScroll()
})
// Fim do Slider

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