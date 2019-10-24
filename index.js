// JavaScript Document
const Discord = require('discord.js');
const client = new Discord.Client();
const userID = "372437270478979072"
client.once('ready', () => {
	console.log('Ready!');
});

client.login('NjM2OTIwNzE3NjEwNDUwOTU0.XbG4dA.6ExGomkJ0zCZlvTAoCO3sKDWxxo');

client.on("message", async message => {
if (message.author.id === ("372437270478979072")) {
	message.react("🌽")
    };
});