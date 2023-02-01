const { Client, Intents } = require("discord.js")
require("dotenv").config();
const client = new Client({
    intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MEMBERS, Intents.FLAGS.GUILD_PRESENCES]
  });

client.once("ready", () => {
  console.log(`${client.users.cache.size} usuarios conectados, en ${client.channels.cache.size} canales de ${client.guilds.cache.size} servidores.`);
});

client.on("guildMemberUpdate", async (oldMember, newMember) => {
    try {
      if (newMember.displayName.startsWith("!", "?", "|", "'", "{", "}", ",", "°", "¡", "¿", "+", "-", "[", "]")) {
        if (!newMember.manageable) console.error('No puedo cambiarle el apodo a este usuario.');
        await newMember.setNickname("");
      }
    } catch (error) {
      console.error(error);
    }
  });

client.login(process.env.DISCORD_TOKEN);