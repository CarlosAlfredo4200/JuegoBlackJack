// Crear la baraja

let deck = [];
const tipos = ['C', 'D', 'H', 'S'];
const especiales = ['J', 'Q', 'K', 'A'];

//Variables para los puntos del jugador

let puntosJugador = 0,
    puntosPc = 0;

//Referencias HTML

const btnPedirCarta = document.querySelector('#btnPedir');
const btnReinicioCarta = document.querySelector('#btnReinicio');
const btnPDetenerCarta = document.querySelector('#btnDetener');

const puntosSmailHtml = document.querySelectorAll('small');

//Imagenes
const divCartasJugador = document.querySelector('#cartas-jugador');



//Instruccion crear deck

const crearDeck = () => {

    for (let k = 2; k <= 10; k++) {
        for (let tipo of tipos) {
            deck.push(k + tipo)
        }
    }

    for (let tipo of tipos) {
        for (let especial of especiales) {
            deck.push(especial + tipo)
        }
    }
    /* utilizo libreria externa para desordenar underscore Pasos:
    underscore - production-Version - copiar - crearArchivo underscore-min -export en index
    */
    deck = _.shuffle(deck);
    return deck;



}

crearDeck()


//Crear funcion para tomar carta y la elimine

const pedirCarta = () => {

    //validar que si se tenga cartas
    if (deck.length === 0) {
        throw 'No hay mas cartas en el deck';
    }
    const carta = deck.pop(); // pop elimina el ultimo y lo toma 
    return carta;
}

pedirCarta();
// extrael el valor de la carta

const valorCarta = (carta) => {
    // substring() regresa string cortado basado en la pocicion inicial y el final que determinemos
    const valorCarta = carta.substring(0, carta.length - 1);
    return (isNaN(valorCarta))
        ? (valorCarta === 'A') ? 11 : 10
        : (parseInt(valorCarta));
}

//Eventos: Para escuchar algun evento seria con addEventListener (dos parametros evento y un callback)

btnPedirCarta.addEventListener('click', () => {
    //extraigo la carta
    const carta = pedirCarta()
    puntosJugador = puntosJugador + valorCarta(carta)
    //a la referencia smail en la posicion 0 insertele puntos jugador
    puntosSmailHtml[0].innerText = puntosJugador;

    /*Crear de forma dinamica la imagen con CreateElement
        < img class="carta" src = "assets/cartas/2C.png" alt = "" /> */
    const imagenCarta = document.createElement('img');

    //Darle la ruta
    imagenCarta.src = `assets/cartas/${carta}.png`;

    //colocarle la clase de estilo
    imagenCarta.classList.add('carta')

    //insertarla...
    divCartasJugador.append(imagenCarta)

})




