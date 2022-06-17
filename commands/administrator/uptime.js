const { MessageEmbed } = require("discord.js");
const { Permissions } = require("discord.js");

module.exports = {
  name: 'uptime',
  aliases: ['ut'],
  description: 'Display the bots uptime',
  run: async (client, message, args, Discord) => {
    if (!message.member.permissions.has(Permissions.FLAGS.ADMINISTRATOR))
      return message.reply("Kamu tidak dapat menggunakan command ini!");
    
    const utembed = new MessageEmbed()
      .setColor("RANDOM")
      .setDescription("Counting Bot Uptimes!...");
    
    let totalSec = (client.uptime / 1000)
    let days = Math.floor(totalSec /86400)
    totalSec %= 86400
    let hours = Math.floor(totalSec / 3600)
    totalSec %= 3600
    let minutes = Math.floor(totalSec / 60)
    let seconds = Math.floor(totalSec % 60)
    
    const utEmbed = new MessageEmbed()
      .setColor("RANDOM")
      .setTitle('BOT UPTIME')
      .setDescription(
          `Days     : ****${days}****d
\nHours    : ***${hours}***h
\nMinutes  : **${minutes}**m
\nSeconds  : **${seconds}**s`
      );
    
    message.reply({ embeds: [utembed] }).then(message => {
      setTimeout(() => {
        message.edit({ embeds: [utEmbed] });
      }, 500 * 5);
    });
  }
};