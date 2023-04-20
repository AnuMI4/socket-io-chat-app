let count = 0;
const socket = io('http://localhost:3000');
socket.on('connection');
socket.on('message', (data) => {
    const div = document.createElement("div");
    if (count % 2 == 0) {
        div.style.backgroundColor = "#d3d3d3";
    }
    div.innerText = data;
    document.getElementById('message-box').append(div);
    document.getElementById("message").value = "";
    count = count + 1;
});

const sendMessage = () => {
    const message = document.querySelector('#message').value;
    socket.emit('message', message);
}