const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "ping",
  aliases: ["test"],
  description: "Ini Command ping",
  run: async(client, message, args) => {
    const pingembed = new MessageEmbed()
      .setColor("RANDOM")
      .setDescription("Counting Bot Latency...");

    const pingEmbed = new MessageEmbed()
      .setColor("RANDOM")
      .setDescription(
        `🤖 Bot Latency: \`${Date.now() -
          message.createdTimestamp}\` ms!\n🏓 Websocket Latency: \`${
          client.ws.ping
        }\` ms!`
      );

    message.reply({ embeds: [pingembed] }).then(message => {
      setTimeout(() => {
        message.edit({ embeds: [pingEmbed] });
      }, 500 * 5);
    });
  }
};
