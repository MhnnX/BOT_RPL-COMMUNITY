const Discord = require('discord.js')
const simplydjs = require('simply-djs')
const { Permissions } = require("discord.js");

module.exports = {
    name: 'takerole',
    category: "info",
    run : async (client, message, args, interaction) => {
      if (!message.member.permissions.has(Permissions.FLAGS.ADMINISTRATOR))
      return message.reply("Kamu tidak dapat menggunakan command ini!");
      let embed = new Discord.MessageEmbed()
      .setTitle("Select Role your Game")
      .setDescription("Klik tombol di bawah untuk memilih Game yang anda mainkan")
      .setThumbnail('https://cdn.discordapp.com/icons/916887489359274016/dfa23477d075261ae76a6903a89815dd.png?size=4096')
simplydjs.btnrole(client, message, {
    embed: embed,
    data: [
      {
        role: '919419903184867358',
        label: 'OWO',
        color: 'SECONDARY',
      },
      {
        role: '919420083447664741',
        label: 'TATSU',
        color: 'SECONDARY',
      },
    ],
  })
    }
}