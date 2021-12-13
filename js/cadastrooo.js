'use strict';
const limparFormulario=(endereco)=>{
    
    document.getElementById('endereco').value='';
    document.getElementById('bairro').value='';
    document.getElementById('cidade').value='';
    document.getElementById('uf').value='';
}
const preencherFormulario=(endereco)=>{
    
    document.getElementById('endereco').value=endereco.logradouro;
    document.getElementById('bairro').value=endereco.bairro;
    document.getElementById('cidade').value=endereco.localidade;
    document.getElementById('uf').value=endereco.uf;
}

const eNumero=(numero) => /^[0-9]+$/.test(numero); //função para permitir so numeros

const cepValido=(cep) => cep.length == 8 && eNumero(cep);

const pesquisarCep = async() =>{
    limparFormulario();
    const cep= document.getElementById('cep').value;
    const url= `https://viacep.com.br/ws/${cep}/json/`;

    // fetch(url).then(responde => responde.json()).then(console.log);
    
    if(cepValido(cep)){
        const dados = await fetch(url);
        const endereco= await dados.json();
        if(endereco.hasOwnProperty('erro')){
            document.getElementById('endereco').value= 'Cep não encontrado'
            document.getElementById('bairro').value= 'Cep não encontrado'
            document.getElementById('cidade').value= 'Cep não encontrado'
            document.getElementById('uf').value= 'Cep não encontrado'
        }else{
        preencherFormulario(endereco);
        }
    }else{
        document.getElementById('endereco').value = 'CEP incorreto';
    }   
} 

document.getElementById('cep').addEventListener('focusout',pesquisarCep);
        















// function limpa_formulário_cep() {
//     //Limpa valores do formulário de cep.
//     document.getElementById('rua').value=("");
//     document.getElementById('bairro').value=("");
//     document.getElementById('cidade').value=("");
//     document.getElementById('uf').value=("");
// }

// function meu_callback(conteudo) {
// if (!("erro" in conteudo)) {
//     //Atualiza os campos com os valores.
//     document.getElementById('rua').value=(conteudo.logradouro);
//     document.getElementById('bairro').value=(conteudo.bairro);
//     document.getElementById('cidade').value=(conteudo.localidade);
//     document.getElementById('uf').value=(conteudo.uf);
// } //end if.
// else {
//     //CEP não Encontrado.
//     limpa_formulário_cep();
//     alert("CEP não encontrado.");
// }
// }

// function pesquisacep(valor) {

// //Nova variável "cep" somente com dígitos.
// var cep = valor.replace(/\D/g, '');

// //Verifica se campo cep possui valor informado.
// if (cep != "") {

//     //Expressão regular para validar o CEP.
//     var validacep = /^[0-9]{8}$/;

//     //Valida o formato do CEP.
//     if(validacep.test(cep)) {

//         //Preenche os campos com "..." enquanto consulta webservice.
//         document.getElementById('rua').value="...";
//         document.getElementById('bairro').value="...";
//         document.getElementById('cidade').value="...";
//         document.getElementById('uf').value="...";

//         //Cria um elemento javascript.
//         var script = document.createElement('script');

//         //Sincroniza com o callback.
//         script.src = 'https://viacep.com.br/ws/'+ cep + '/json/?callback=meu_callback';

//         //Insere script no documento e carrega o conteúdo.
//         document.body.appendChild(script);

//     } //end if.
//     else {
//         //cep é inválido.
//         limpa_formulário_cep();
//         alert("Formato de CEP inválido.");
//     }
// } //end if.
// else {
//     //cep sem valor, limpa formulário.
//     limpa_formulário_cep();
// }
// };
