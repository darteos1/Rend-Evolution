// class Validator{
//     // constructor(){
//     //     this.validations = [
//     //         'data-min-length',
//     //         'data-max-length',

//     //     ]
//     // }
// // iniciar a validação de tudo
// validate(form){

//     // resgata todas as validações
//     let currentValidations = document.querySelectorAll('form .error-validation');

//     if(currentValidations.length > 0) {
//         this.cleanValidations(currentValidations);
//     }

//     // pegar os inputs
//     let inputs = form.getElementsByTagName('input');


// // transforma uma HTMLCollection -> array
//     let inputsArray = [...inputs];

//     //loop nos inputs e validação ao que for encontrado
//     inputsArray.forEach(function(input){
//         // todas as validações existentes
//         for(let i = 0; this.validations.length > i; i++){
// // verifica se a validação atual existe no input           
//             if(input.getAttribute(this.validations[i])!= null){
//                 // limpando a string para virar um metodo
//                 let method = this.validations[i].replace('data-', '').replace('-', '');

//                 // valor do input
//                 let value = input.getAttribute(this.validations[i]);

//                 // invovar o metodo
//                 this[method](input, value);
                
//             }
//         }
//     }, this);   
//  }

// // verifica se um input tem um numero minimo de caracteres

// //    minlength(input, minValue) {
// //     let inputLength = input.value.length;

// //     let errorMessage = `O campo precisa ter pelo menos ${minValue} caracteres`;
// //     if(inputLength < minValue){
// //         this.printMessage(input, errorMessage)
// //     }
// // }

// // verifica se um input passou do limite de caracteres

// // maxlength(input, maxValue){
// //     let inputLength = input.value.length;

// //     let errorMessage = `O campo precisa ter menos ${maxValue} caracteres`;
// //     if(inputLength > maxValue){
// //         this.printMessage(input, errorMessage)
// //     }

// // }
//  // imprimir msg de erro na tela
// //   printMessage(input, msg) {
// //     let template = document.querySelector('.error-validation').cloneNode(true);

// //     template.textContent = msg;
    
// //     let inputParent = input.parentNode;

// //     template.classList.remove('template');

// //     inputParent.appendChild(template);
// //   }

//   // limpa as validações
//    cleanValidations(validations){
//        validations.forEach(el => el.remove())
//    }

// }





// let form = document.getElementById("register-form")
// let submit = document.getElementById("btn-submit")

// let validator = new Validator();

// // validações
// submit.addEventListener('click', function(e){
   
//     e.preventDefault();
    
//     validator.validate(form);
// });


 
function limpa_formulário_cep() {
    //Limpa valores do formulário de cep.
    document.getElementById('rua').value=("");
    document.getElementById('bairro').value=("");
    document.getElementById('cidade').value=("");
    document.getElementById('uf').value=("");
    document.getElementById('ibge').value=("");
}

function meu_callback(conteudo) {
if (!("erro" in conteudo)) {
    //Atualiza os campos com os valores.
    document.getElementById('rua').value=(conteudo.logradouro);
    document.getElementById('bairro').value=(conteudo.bairro);
    document.getElementById('cidade').value=(conteudo.localidade);
    document.getElementById('uf').value=(conteudo.uf);
    document.getElementById('ibge').value=(conteudo.ibge);
} //end if.
else {
    //CEP não Encontrado.
    limpa_formulário_cep();
    alert("CEP não encontrado.");
}
}

function pesquisacep(valor) {

//Nova variável "cep" somente com dígitos.
var cep = valor.replace(/\D/g, '');

//Verifica se campo cep possui valor informado.
if (cep != "") {

    //Expressão regular para validar o CEP.
    var validacep = /^[0-9]{8}$/;

    //Valida o formato do CEP.
    if(validacep.test(cep)) {

        //Preenche os campos com "..." enquanto consulta webservice.
        document.getElementById('rua').value="...";
        document.getElementById('bairro').value="...";
        document.getElementById('cidade').value="...";
        document.getElementById('uf').value="...";
        document.getElementById('ibge').value="...";

        //Cria um elemento javascript.
        var script = document.createElement('script');

        //Sincroniza com o callback.
        script.src = 'https://viacep.com.br/ws/'+ cep + '/json/?callback=meu_callback';

        //Insere script no documento e carrega o conteúdo.
        document.body.appendChild(script);

    } //end if.
    else {
        //cep é inválido.
        limpa_formulário_cep();
        alert("Formato de CEP inválido.");
    }
} //end if.
else {
    //cep sem valor, limpa formulário.
    limpa_formulário_cep();
}
};
