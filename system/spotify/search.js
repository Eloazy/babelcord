const { EmbedBuilder } = require('discord.js');
const api = require('./keySystem/callAPI.js')

module.exports = async function(interaction, query) {
  await api(`v1/search?q=${query}&type=track&market=BR&limit=1&offset=5&include_external=audio`, 'GET').then((data) => {
    const embed = new EmbedBuilder()
      .setColor(0x1ed760)
      .setTitle('search')
      .setDescription('Searching a music on spotify')
      .setThumbnail(data.tracks.items[0].album.images[0].url)
      .addFields(
        { name: 'Album:', value: data.tracks.items[0].album.name, inline:true },
        { name: 'Release:', value: data.tracks.items[0].album.release_date, inline:true },
        { name: 'Music:', value: data.tracks.items[0].name, inline:false },
        { name: 'Track:', value: `${data.tracks.items[0].track_number}/${data.tracks.items[0].album.total_tracks}`, inline:true },
        { name: 'Popularity:', value: `${data.tracks.items[0].popularity}`, inline:false },
        { name: 'Music Link:', value: `[Click here](${data.tracks.items[0].external_urls.spotify})`, inline:false },
      )
      .setTimestamp()
    interaction.reply({ embeds: [embed] });
  })
}
