const Discord = require('discord.js')
const simplydjs = require('simply-djs')
const { Permissions } = require("discord.js");

module.exports = {
    name: 'verify',
    category: "info",
    run : async (client, message, args, interaction) => {
      if (!message.member.permissions.has(Permissions.FLAGS.ADMINISTRATOR))
      return message.reply("Kamu tidak dapat menggunakan command ini!");
      let embed = new Discord.MessageEmbed()
      .setTitle("VERIFIKASI")
      .setDescription("Klik tombol di bawah untuk verifikasi")
      .setThumbnail('https://cdn.discordapp.com/icons/916887489359274016/dfa23477d075261ae76a6903a89815dd.png?size=4096')
simplydjs.btnrole(client, message, {
    embed: embed,
    data: [
      {
        role: '918619008830410812',
        label: 'VERIFY',
        color: 'SUCCESS',
      },
    ],
  })
    }
}