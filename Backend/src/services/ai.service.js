import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({});

async function contentGenerator(prompt) {
  const response = await ai.models.generateContent({
    model: "gemini-2.5-flash",
    contents: prompt,
  });
  console.log(response.text);
}

module.exports = contentGenerator;
