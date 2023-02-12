

console.log('Soy index de Public')
const socket = io()

socket.emit('mensaje', '¡Mensaje del cliente');

//Escuchando al server
socket.on('mensaje server', data => {
    console.log(data);
})

socket.on('evento para todos menos el actual', data => {
    console.log(data);
});

socket.on('evento para todos', data => {
    console.log(data);
})


