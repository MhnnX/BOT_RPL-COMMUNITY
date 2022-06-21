const { Message, MessageEmbed, version } = require("discord.js");
const Client = require("../../index.js");
const embed = require('../../events/config.js');
let os = require("os");
let cpuStat = require("cpu-stat");

module.exports = {
  name: "info",
  aliases: ["botinfo"],
  description: `see stats of bot`,
  userPermissions: ["SEND_MESSAGES"],
  botPermissions: ["EMBED_LINKS"],
  category: "Information",
  cooldown: 5,
  inVoiceChannel: false,
  inSameVoiceChannel: false,
  Player: false,
  djOnly: false,

  /**
   *
   * @param {JUGNU} client
   * @param {Message} message
   * @param {String[]} args
   * @param {String} prefix
   */
  run: async (client, message, args, prefix) => {
    // Code
    cpuStat.usagePercent(function (err, percent, seconds) {
      message.reply({
        embeds: [
          new MessageEmbed()
            .setColor()

            .setTitle("__**Stats:**__")
            .addField(
              "⏳ Memory Usage",
              `\`${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(
                2
              )}\` / \`${(os.totalmem() / 1024 / 1024).toFixed(2)} MB\``
            )
            .addField(
              "⌚️ Uptime ",
              `<t:${Math.floor(Date.now() / 1000 - client.uptime / 1000)}:R>`
            )
            .addField("📁 Users", `\`${client.guilds.cache.reduce((a,b) => a + b.memberCount, 0)} User\``, true)
            .addField("📁 Servers", `\`${client.guilds.cache.size} Server\``, true)
            .addField("📁 Channels", `\`${client.channels.cache.size} Channel\``, true)
            .addField("👾 Discord.js", `\`v${version}\``, true)
            .addField("🤖 Node", `\`${process.version}\``, true)
            .addField("🏓 Ping", `\`${client.ws.ping}ms\``, true)
            .addField(
              "🤖 CPU",
              `\`\`\`md\n${os.cpus().map((i) => `${i.model}`)[0]}\`\`\``
            )
            .addField("🤖 CPU usage", `\`${percent.toFixed(2)}%\``, true)
            .addField("🤖 Arch", `\`${os.arch()}\``, true)
            // .addField("\u200b", `\u200b`)
            .addField("💻 Platform", `\`\`${os.platform()}\`\``, true),
        ],
      });
    });
  },
};
