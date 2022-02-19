const { MessageEmbed } = require("discord.js");
const { Permissions } = require("discord.js");

module.exports = {
  name: "admin",
  aliases: ["adm"],
  description: "Ini command Help",
  run: async(client, message, args) => {
    const helpEmbed = new MessageEmbed()
      .setColor("BLUE")
      .setTitle("Admin Help Guide")
      .setDescription(
        "***Coming Soon***");
    if (!message.member.permissions.has(Permissions.FLAGS.ADMINISTRATOR))
    return message.reply("Kamu tidak dapat menggunakan command ini!");
    return message.reply({ embeds: [helpEmbed] });
  }
};