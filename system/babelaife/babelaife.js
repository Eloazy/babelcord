import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI("AIzaSyBIF4mjYEk-VtQZpXIIoV_wtd49iLzPLFY");
const model = genAI.getGenerativeModel({ 
	model: "gemini-2.0-flash-thinking-exp-01-21",
	systemInstruction: {
		parts: [
			{text: 'you name is Babel'},
			{text: 'The response text must not exceed 4000 characters'},
		]
	},
	generationConfig: {
		temperature: 0,
		top_p:0
	}
});

export default async function(interaction, query) {
	interaction.deferReply()
	var time = new Date().getTime();

	await model.generateContent({
		contents: [{ parts: [{ text: query }] }],
		safetySettings: [ 
		    {
		        category: "HARM_CATEGORY_HARASSMENT",
		        threshold: "BLOCK_LOW_AND_ABOVE"
		    },
		    {
		        category: "HARM_CATEGORY_HATE_SPEECH",
		        threshold: "BLOCK_LOW_AND_ABOVE"
		    },
		    {
		        category: "HARM_CATEGORY_SEXUALLY_EXPLICIT",
		        threshold: "BLOCK_LOW_AND_ABOVE"
		    },
		    {
		        category: "HARM_CATEGORY_DANGEROUS_CONTENT",
		        threshold: "BLOCK_LOW_AND_ABOVE"
		    }
	    ]
	}).then((result) => {
		time = new Date().getTime() - time
		interaction.editReply('> '+query+'\n'+result.response.text()+`\n-# Reply in ${time} milliseconds`)
	})
		
	
	
}