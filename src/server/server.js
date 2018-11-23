const app = require("express")();
const http = require("http").Server(app);
const io = require("socket.io")(http);

app.get("/", (req,res) => {
    res.send("hello");
});

io.on("connection", (socket) => {
    console.log("a user connected");
})

io.listen(3001);
http.listen(3000, () => {
    console.log("server started!");
});