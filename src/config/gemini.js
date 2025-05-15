import { GoogleGenAI } from "@google/genai";
// import { configDotenv } from "dotenv";

// const ai = new GoogleGenAI({ apiKey: "AIzaSyAeZseeQc7ih_cZFE3q0GTFzhjyIzkdt-o" });
const apiKey = import.meta.env.VITE_GEMINI_API_KEY;
console.log(import.meta.env)
// const apiKey = configDotenv.VITE_GEMINI_API_KEY;
console.log(apiKey)
const ai = new GoogleGenAI({ apiKey });
async function run(prompt) {
  const response = await ai.models.generateContent({
    model: "gemini-2.0-flash",
    contents:prompt,
  });
  // console.log(response.text);
  return response.text
}

export default run
