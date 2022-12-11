const app = require('express')();
const http = require('http').Server(app);
const  io = require('socket.io')(http)

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
    return
})
io.on('connection',(socket)=>{
    socket.on('chat message', (msg) => {
        io.emit('chat message', msg)
    })
})

http.listen(3100, ()=>{
    console.log('3100 port start');
})