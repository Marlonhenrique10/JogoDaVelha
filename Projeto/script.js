let x = document.querySelector('.x');
let o = document.querySelector('.o');
let boxes = document.querySelectorAll('.box');
let buttons = document.querySelectorAll('#botao-container button');
let mensagemContainer = document.querySelector('#mensagem');
let mensagemText = document.querySelector('#mensagem p');
let secondPlayer;

// Contador de jogadas
let player1 = 0;
let player2 = 0;

// adicionando o vento do click aos boxes
for(let i = 0; i < boxes.length; i++) {

    boxes[i].addEventListener('click', function(){
        let el;
        
        if(player1 == player2) {
            el = x;
        } else {
            el = o;
        }
        
        if(this.childNodes.length == 0) {
            let cloneEl = el.cloneNode(true);
        
            this.appendChild(cloneEl);

            // computar jogada
            if(player1 == player2) {
                player1++;
            } else {
                player2++;
            }
        }
    });
}