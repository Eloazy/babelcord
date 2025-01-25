const { EmbedBuilder } = require('discord.js');
const api = require('./keySystem/callAPI.js')

module.exports = async function(interaction) {
  await api('v1/me/', 'GET').then((data) => {
    const embed = new EmbedBuilder()
      .setColor(0x000000)
      .setTitle('Info')
      .setDescription('BABEL-SYSTEM | version: 3.0')
      .setImage(data.images[0].url)
      .setThumbnail('https://img.icons8.com/ios11/512/FFFFFF/spotify.png')
      .addFields(
        { name: 'Account conected:', value: data.display_name },
        { name: 'Type:', value: data.type },
        { name: 'Creator:', value: '<@874115618746552330>', inline: false }
      )
      .setTimestamp()
      .setFooter({ text: 'Babel\'s Torn-3.0.0' });
    interaction.reply({ embeds: [embed] });
  })
}
