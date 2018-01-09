/*
O desafio de hoje será um pequeno projeto: um cronômetro!
As regras para criação do cronômetro são as seguintes:
1. Crie um arquivo index.html e adicione esse script a ele;
2. Crie um campo `input` do tipo `text`, e inicie-o com um valor 0 (zero).
Ele será o nosso cronômetro;
3. Crie 3 botões para as ações do cronômetro: Start, Stop e Reset;
4. Ao clicar em Start, o valor do campo deve ser incrementado de 1 em 1, a
cada segundo;
5. Ao clicar em Stop, o cronômetro deve parar de contar;
6. Ao clicar em Reset, o cronômetro deve zerar e parar de contar.
Utilize o atributo data-js para nomear o campo e os botões. Você pode
usar o nome que achar melhor, desde que ele seja semântico, ou seja, o nome
dado ao elemento HTML deve definir o que o elemento é ou o que ele faz.
*/
(function(win,doc){
    var inputTempo  = doc.querySelector("input[data-js='valor_cronometro']");
    doc.querySelector("[data-js='start_button']").addEventListener('click',iniciar_cronometro);
    doc.querySelector("[data-js='stop_button']").addEventListener('click',parar_cronometro);
    doc.querySelector("[data-js='reset_button']").addEventListener('click',resetar_cronometro);
    var idCronometro = null;

    function iniciar_cronometro(){
        idCronometro =  setTimeout(function(){
            inputTempo.value = Number.parseInt(inputTempo.value) + 1;
            iniciar_cronometro();
        },1000)
    }

    function parar_cronometro(){
        console.log('Limpando o timeout, com id ' + idCronometro);
        clearTimeout(idCronometro);
    }

    function resetar_cronometro(){
        console.log('resetando o cronometro!');
        inputTempo.value = 0;
    }


})(window,document);
