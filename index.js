//Depenencies
const discord = require('discord.js');
const client = new discord.Client();
const fs = require('fs');
client.commands = new discord.Collection();

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles){
    const command = require(`./commands/${file}`);

    client.commands.set(command.name, command);
}

//Set Token and Prefix
const CONFIG = require("./config.json");
const prefix = CONFIG.prefix;

//report when bot starts up succesfully
client.on('ready', () =>{
    console.log(`Logged in as ${client.user.tag}`)
});

//Comand manager
client.on('message', message => {
    let args = message.content.substring(prefix.length).split(" ");

    switch(args[0]){
        case "test":
            client.commands.get('test').execute(message, args);
        break;
    }

})

//Login to Discord
client.login(CONFIG.token);