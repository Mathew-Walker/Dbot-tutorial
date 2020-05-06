//Call for Discord Js
const discord = require('discord.js');
const client = new discord.Client();

//Set login token
const token = "Your-Token-Here";

client.on('ready', () =>{
    console.log(`Loggined in as ${client.user.tag}`)
});

//Login to Discord
client.login(token);