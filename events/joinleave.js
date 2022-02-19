const client = require("../index.js");
const { MessageEmbed } = require('discord.js');

//JOIN LOG
client.on('guildMemberAdd', async(member) => {
  const Channel = member.guild.channels.cache.get('916447379849347142')
  const embed = new MessageEmbed()
  .setColor("GREEN")
  .setTitle("Member Join")
  .setDescription(`**${member.displayName}** Joined ${member.guild.name}, We Have Now ${member.guild.memberCount} Members`)
  Channel.send({ embeds: [embed] })
})

//LEAVE LOG
client.on('guildMemberRemove', async(member) => {
  const Channel = member.guild.channels.cache.get('918105012704526346')
  const embed = new MessageEmbed()
  .setColor("GREEN")
  .setTitle("Member Left")
  .setDescription(`**${member.displayName}** Left ${member.guild.name}, We Have Now ${member.guild.memberCount} Members`)
  Channel.send({ embeds: [embed] })
})