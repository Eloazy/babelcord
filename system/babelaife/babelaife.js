export default async function(interaction, query) {
	await interaction.deferReply()
	const response = await fetch('http://localhost:5000/api/babelaife', {
        method: 'POST',
        headers: {
            'Content-Type':'application/json',
        },
        body: JSON.stringify({ query })
    })
    if(response.ok) {
    	const data = await response.json()
    	await interaction.editReply(data.result)
    }
    else {console.log('error: ', response.status)}
}

