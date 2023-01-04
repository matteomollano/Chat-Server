const net = require('net')
const readline = require('readline') // unix library for making prompts on the command line
const process = require('process')
const prompt = require("prompt-sync")({ sigint: true });

const command_line = readline.createInterface({input: process.stdin, output: process.stdout})

const client_connection = new net.Socket()

client_connection.connect({host: 'matteoschatserver.australiaeast.cloudapp.azure.com', port: 8888})

var username = prompt("Please enter a username: ")
console.log("Welcome " + username + "!")

client_connection.on('connect', function() {
    // console.log("yay, I connected!")

    command_line.on('line', function(text){
        client_connection.write(username + " said: " + text)
    })

    client_connection.on('data', function(data){
        console.log(data.toString("utf8"))
    })

    client_connection.on('end', function(){
        console.log("Server disconnected me!")
    })
    // send a message to the server
    // client_connection.write("Hi Server!")
})