const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "user",
  description: "Ini command Help (USER)",
  run: async(client, message, args) => {
    const helpEmbed = new MessageEmbed()
      .setColor("BLUE")
      .setTitle("User Help Guide")
      .setDescription(
        "***Coming Soon*** \nor contact administrator for more commands"
      );
    return message.reply({ embeds: [helpEmbed] });
  }
};