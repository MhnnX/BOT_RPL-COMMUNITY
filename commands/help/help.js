const { Discord, MessageEmbed } = require("discord.js");
const db = require('quick.db')

module.exports = {
  name: "help",
  aliases: ["h"],
  description: "Ini command Help",
  run: async(client, message, args) => {
    const helpEmbed = new MessageEmbed()
      .setColor("BLUE")
      .setTitle("Help Guide")
      .setDescription("Prefix is [***_***]\nExample : *_user*")
      .setThumbnail('https://cdn.discordapp.com/icons/916887489359274016/dfa23477d075261ae76a6903a89815dd.png?size=4096')
	    .addFields(
	    	{ name: '**USER**', value: '```user```', inline: true },
	    	{ name: '**ADMIN**', value: '```admin```', inline: true },
	)
    return message.reply({ embeds: [helpEmbed] });
  }
};