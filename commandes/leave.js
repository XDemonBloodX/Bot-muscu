const Discord = require("discord.js");
const color = "#007fff";
const client = new Discord.Client();
const OwnerID = "303971342703919104";

module.exports.run = async (client, message, args) => {
  message.delete();
  if (message.author.id !== OwnerID)
    return message.channel.send("Permission non accordé");

  message.guild.leave();
  console.log("SERVEUR QUITTE AVEC SUCCES");
};

module.exports.help = {
  name: "leave",
};
