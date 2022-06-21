const {Collection, Client, Discord} = require('discord.js')
const config = require('./config.json');
const fs = require('fs');
const simplydjs = require("simply-djs");
const { WebhookClient } = require('discord.js');
const hook = new WebhookClient({ url: 'https://discord.com/api/webhooks/988778378129702932/wZClJZ2tn2RjVP8HIOBxshOvSUByDORwIccwhScfaCMMDdzrCbWqtk1QBtX5t2LUlRNO' })
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
  console.log(`${client.user.tag} is online`)
  hook.send(`**${client.user.username}** is online`)
})

client.on("interactionCreate", interaction => {
    simplydjs.clickBtn(interaction)
})

client.login(config.token)