const net = require('net')
const server = new net.Server()
server.listen(8888)

let last_connection = null
let connections = []

server.on('connection', function(connection) {
    console.log("hey, someone connected!")
    connections.push(connection)

    connection.on('data', function(data) {

        last_connection = connection
        for (let new_connection of connections) {
            if (new_connection === last_connection) {
                continue
            }
            new_connection.write(data.toString("utf8"))
        }
        
        console.log(data.toString("utf8"))
    })
    // connection.write(Buffer.from("Server said: Hi Client", "utf8"))
})

server.on('listening', function() {
    console.log("server is listening!")
})