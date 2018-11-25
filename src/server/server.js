const app = require("express")();
const http = require("http").Server(app);
const io = require("socket.io")(http);
const players = {};
const rooms = [];

app.get("/", (req,res) => {
    res.send("hello");
});

http.listen(3000, () => {
    console.log("server started!");
});

const ticTacToeSocket = io.of("/tictactoe");

ticTacToeSocket.on("connection", (client) => {
  
    client.on("join", (playerName) => {
        players[client.id] = {};
        players[client.id].name = playerName;
        ticTacToeSocket.emit("serverBroadcastMessage", `player ${playerName} connected to lobby`);
        ticTacToeSocket.emit("updateGuestList", players);
    });

    client.on("sendChatText", (text) => {
        client.broadcast.emit("serverBroadcastMessage", text);
    })

    client.on("createRoom", (room) =>{
         client.join(room.name);
         rooms.push({
             clientId:client.id,
             roomName:room.name,
             password:room.password,
             isPassword:room.password !== "" ? true : false
         });

         ticTacToeSocket.adapter.rooms[room.name].password = room.password;
         
         ticTacToeSocket.in(room.name).emit("roomMessage", `you are now in room ${room.name}`);
         ticTacToeSocket.in(room.name).emit("updateRoomList", rooms);
    })

    client.on("joinRoom", (room) => {
        const currentRoomPassword = ticTacToeSocket.adapter.rooms[room.name].password;
       
        if(currentRoomPassword !== ""){
            if(currentRoomPassword == room.password){
                const totalClientConnectedinRoom = Object.keys(ticTacToeSocket.adapter.rooms[room.name].sockets).length;
                if(totalClientConnectedinRoom == 1) {

                }

                if(totalClientConnectedinRoom > 12) {
                    client.emit("maximumGuestReachedonRoom", "Sorry the room is currently full");
                }else{
                    client.join(room.name);
                    ticTacToeSocket.in(room.name).emit("roomMessage", `${players[client.id].name} are now in room ${room.name}`);
                }
            }
        } else {
            const totalClientConnectedinRoom = Object.keys(ticTacToeSocket.adapter.rooms[room.name].sockets).length;
            if(totalClientConnectedinRoom == 1) {

            }

            if(totalClientConnectedinRoom > 12) {
                client.emit("maximumGuestReachedonRoom", "Sorry the room is currently full");
            }else{
                client.join(room.name);
                ticTacToeSocket.in(room.name).emit("roomMessage", `${players[client.id].name} are now in room ${room.name}`);
            }
        }
    })

    client.on("disconnect", () => {
        
        delete players[client.id];
    })
})


