import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI("AIzaSyBIF4mjYEk-VtQZpXIIoV_wtd49iLzPLFY");
const model = genAI.getGenerativeModel({ 
	model: "gemini-2.0-flash-thinking-exp-01-21",
	systemInstruction: {
		parts: [
			{text: 'you name is Babel'},
			{text: 'The response text must not exceed 2000 characters'},
		]
	},
	generationConfig: {
		maxOutputTokens:2000,
		temperature: 0,
		top_p:0
	}
});

let chat = model.startChat({
	history: []
})

function resetChatHistory() {chat = model.startChat({ history: [] })}

export default async function(interaction, query) {
	await interaction.deferReply()
	if(query.toLowerCase() === "clean_historic") {
		resetChatHistory()
		return interaction.editReply("clean historic")
	}
	const result = await chat.sendMessage(query);
	var time = new Date().getTime();

	await model.generateContent({
		contents: [{ parts: [{ text: query }] }],
		safetySettings: [ 
		    {
		        category: "HARM_CATEGORY_HARASSMENT",
		        threshold: "BLOCK_NONE"
		    },
		    {
		        category: "HARM_CATEGORY_HATE_SPEECH",
		        threshold: "BLOCK_NONE"
		    },
		    {
		        category: "HARM_CATEGORY_SEXUALLY_EXPLICIT",
		        threshold: "BLOCK_NONE"
		    },
		    {
		        category: "HARM_CATEGORY_DANGEROUS_CONTENT",
		        threshold: "BLOCK_NONE"
		    }
	    ]
	}).then((res) => {
		time = new Date().getTime() - time
		interaction.editReply('> '+query+'\n'+result.response.text()+`\n-# Reply in ${time} milliseconds`)
	})
}