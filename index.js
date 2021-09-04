const io = require("socket.io-client")
const axios = require('axios')

axios.get("http://localhost:8111/ping").then(({ data }) => console.log(data));

const socket = io("http://localhost:8111/run", { secure: true, reconnection: true, rejectUnauthorized: false, transports: ["websocket"] })

socket.on('connect', () => {
    socket.emit("roomID", "5f225a6f94aff32d98f87ea6")
    setTimeout(() => socket.emit("exec"), 2000);
});

socket.io.on('error', console.error)