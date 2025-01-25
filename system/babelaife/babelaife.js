import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI("AIzaSyBIF4mjYEk-VtQZpXIIoV_wtd49iLzPLFY");
const model = genAI.getGenerativeModel({ 
	model: "gemini-2.0-flash-thinking-exp-01-21",
	systemInstruction: {
		parts: [
			{text: 'you are an artificial intelligence called babel'},
			{text: 'You answer objectively and simply'}
		]
	}
});

export default async function(interaction, query) {
	interaction.deferReply()
	var time = new Date().getTime();
	await model.generateContent(query).then((result) => {
		time = new Date().getTime() - time
		interaction.editReply(result.response.text()+`\n-# Reply in ${time} milliseconds`)
	})
	
}