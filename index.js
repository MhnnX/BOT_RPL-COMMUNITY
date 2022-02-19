const {Collection, Client, Discord} = require('discord.js')
const config = require('./config.json');
const fs = require('fs');
const simplydjs = require("simply-djs")
const client = new Client({
    intents: [
        "GUILDS",
        "GUILD_MEMBERS",
        "GUILD_BANS",
        "GUILD_INTEGRATIONS",
        "GUILD_WEBHOOKS",
        "GUILD_INVITES",
        "GUILD_VOICE_STATES",
        "GUILD_PRESENCES",
        "GUILD_MESSAGES",
        "GUILD_MESSAGE_REACTIONS",
        "GUILD_MESSAGE_TYPING",
        "DIRECT_MESSAGES",
        "DIRECT_MESSAGE_REACTIONS",
        "DIRECT_MESSAGE_TYPING",
    ],
});

module.exports = client;

client.commands = new Collection();
client.aliases = new Collection();
client.categories = fs.readdirSync("./commands/");

require("http").createServer((_, res) => res.end("Uptime!")).listen(8080);

["command", "event"].forEach(handler => {
    require(`./handlers/${handler}`)(client);
});

client.once('ready', () => {
  console.log(`${client.user.tag} is ready`)
})

client.on("interactionCreate", interaction => {
    simplydjs.clickBtn(interaction)
})

client.login(config.token)