const jugada = document.getElementById('selectorJugada');
const PAPER_ELECTION = document.getElementById('paperElection');
const ROCK_ELECTION = document.getElementById('rockElection');
const SCISSORS_ELECTION = document.getElementById('scissorsElection');
const INTERFAZ_INICIO = document.getElementById('interfazInicio');
const INTERFAZ_GAME = document.getElementById('interfazGame');
const INTERFAZ_GAMEOVER = document.getElementById('juegoclose');
const JUGADAR_PLAYER = document.getElementById('jugada-player');
const JUGADAR_COMPUTER = document.getElementById('jugada-computer');
console.log(INTERFAZ_GAME); 
let numerodejugada;
function empezar(){
    INTERFAZ_INICIO.classList.toggle('interfaz-toggle');
    INTERFAZ_GAME.classList.toggle('interfaz-toggle')
}
function elegirJugada($element){
    let hola = $element;
    if(!jugada.childNodes[0]){
        let imagen = `<img src="${$element.src}">`
        jugada.insertAdjacentHTML("afterbegin",imagen);
        jugada.style.border = 'none';
        switch($element){
            case PAPER_ELECTION.childNodes[1]:
                numerodejugada = 1;
                break;
            case ROCK_ELECTION.childNodes[1]:
                numerodejugada = 2;
                break;
            case SCISSORS_ELECTION.childNodes[1]:
                numerodejugada = 3;
                break;
            default:
                break;
        }
        
    }
    else{
        let imagen = `<img src="${$element.src}">`
        let hijo = jugada.childNodes[0];
        jugada.removeChild(hijo)
        jugada.insertAdjacentHTML("afterbegin",imagen);
        switch($element){
            case PAPER_ELECTION.childNodes[1]:
                numerodejugada = 1;
                break;
            case ROCK_ELECTION.childNodes[1]:
                numerodejugada = 2;
                break;
            case SCISSORS_ELECTION.childNodes[1]:
                numerodejugada = 3;
                break;
            default:
                break;
        }
    }
};

function iniciarJuego(){
    
    let computadora = jugadaComputadora();
    let ganador;
    if(numerodejugada===1){
        pantallaFinal(computadora);
        if(computadora === 1){
            sacarFondo();
            INTERFAZ_GAMEOVER.childNodes[1].textContent='Empate'}
        else if(computadora === 2){
            sacarFondo();
            INTERFAZ_GAMEOVER.childNodes[1].textContent ='Gana Jugador'}
        else{
            sacarFondo();
            INTERFAZ_GAMEOVER.childNodes[1].textContent ='Gana Computadora'};
    }
    else if(numerodejugada===2){
        pantallaFinal(computadora);
        if(computadora === 1){
            sacarFondo();
            INTERFAZ_GAMEOVER.childNodes[1].textContent ='Gana Computadora'}
        else if(computadora === 2){
            sacarFondo();
            INTERFAZ_GAMEOVER.childNodes[1].textContent ='Empate'}
        else{
            sacarFondo();
            INTERFAZ_GAMEOVER.childNodes[1].textContent ='Gana Jugador'};
    }
    else if(numerodejugada===3){
        pantallaFinal(computadora);
        if(computadora === 1){
            sacarFondo();
            INTERFAZ_GAMEOVER.childNodes[1].textContent ='Gana Jugador'}
        else if(computadora === 2){
            sacarFondo();
            INTERFAZ_GAMEOVER.childNodes[1].textContent ='Gana Computadora'}
        else{
            sacarFondo();
            INTERFAZ_GAMEOVER.childNodes[1].textContent ='Gana Empate'}
    }
    else{ganador='sinseleccion';
        alert('Elija piedra papel o tijera')
    }
   
}

function jugadaComputadora(){
    return (Math.floor(Math.random()*3)+1);
}

function sacarFondo(){
    INTERFAZ_GAME.classList.add('interfaz-toggle')
    INTERFAZ_GAMEOVER.classList.toggle('interfaz-toggle')
}

function pantallaFinal(variable){
    if(numerodejugada===1){
        let papel = '<img src="img/paper.png">'
        JUGADAR_PLAYER.insertAdjacentHTML('beforeend',papel);
    }
    else if(numerodejugada===2){
        let piedra = '<img src="img/rockleft.png">'
        JUGADAR_PLAYER.insertAdjacentHTML('beforeend',piedra);

    }
    else if(numerodejugada===3){
        let tijeras = '<img src="img/scissors.png">';
        JUGADAR_PLAYER.insertAdjacentHTML('beforeend',tijeras);
    }
    if(variable===1){
        let papel = '<img src="img/paperRight.png">'
        JUGADAR_COMPUTER.insertAdjacentHTML('beforeend',papel);
    }
    else if(variable===2){
        let piedra = '<img src="img/rock.png">'
        JUGADAR_COMPUTER.insertAdjacentHTML('beforeend',piedra);

    }
    else if(variable===3){
        let tijeras = '<img src="img/siccsorRight.png">';
        JUGADAR_COMPUTER.insertAdjacentHTML('beforeend',tijeras);
    }

}

function reiniciarGame(){
    window.location.reload();
}