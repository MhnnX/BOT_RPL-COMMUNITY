const { Permissions } = require("discord.js");

module.exports = {
  name: "clear",
  aliases: ["cl"],
  descriptiion: "Clear Message",
  run: async (client, message, args) => {
    if (!message.member.permissions.has(Permissions.FLAGS.ADMINISTRATOR))
      return message.reply("Kamu tidak dapat menggunakan command ini!");
    if (!args[0])
      return message.reply("Masukkan jumlah pesan yang ingin di hapus");
    if (isNaN(args[0])) return message.reply("LU GAK USAH NGADI-NGADI GBLK!!!");
    if (args[0] > 100)
      return message.reply("Kamu tidak dapat menghapus lebih dari 100 pesan!");
    if (args[0] < 2)
      return message.reply("Kamu harus menghapus pesan lebih dari 1 pesan!");
    await message.channel.messages.fetch({ limit: args[0] }).then(messages => {message.channel.bulkDelete(messages);
    });
  }
};