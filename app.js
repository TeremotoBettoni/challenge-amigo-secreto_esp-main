// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
// Primero creamos un array para agregar los amigos
let amigos = [];

// Funcion que agregue un elemento a un elemento HTML con un texto específico
function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

// Implementa una función para agregar amigos
function agregarAmigo() {
    let inputAmigo = document.getElementById('amigo').value;
    if (inputAmigo == "") {
        // si se ingresa en esta condicion que salga un alert con mensaje de error que diga "Por favor, inserte un nombre."
        alert('Por favor, inserte un nombre.');
    } else {
        amigos.push(inputAmigo);
        limpiarCaja();
        document.getElementById('listaAmigos').innerHTML = amigos.join('<br>');
        console.log(amigos);
    }
    limpiarCaja();
    return;
}

// Implementa una función para limpiar la caja de texto después de agregar un amigo a la lista
function limpiarCaja() {
    document.getElementById('amigo').value = "";
    return;
}

// Implementa una función que sorte los amigos dentro de la lista y elija uno al azar para mostrarlo en pantalla
function sortearAmigo() {
    // que verifique primero si hay amigos en la lista y si no hay, muestre un mensaje de error
    if (amigos.length == 0) {
        alert('Por favor, inserte nombres para poder sortearlos.');
        return;
    } else {
    let amigoSorteado = amigos[Math.floor(Math.random() * amigos.length)];
    asignarTextoElemento('#resultado', amigoSorteado);
    return;
    }
}