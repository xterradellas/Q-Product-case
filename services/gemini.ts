import { GoogleGenAI } from "@google/genai";

export const generateBrainstorming = async (
  context: string,
  problem: string
): Promise<string> => {
  try {
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    
    const prompt = `
      You are a Senior Product Manager at Qida, a home caring business.
      
      Context: ${context}
      
      Problem Statement: ${problem}
      
      Please brainstorm 3-5 strategic initiatives to solve this problem. 
      Focus on high-impact, actionable product changes or operational improvements.
      Format the output as a clean HTML list (<ul><li>...</li></ul>) with bold headers for each point.
      Keep it concise and professional.
    `;

    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: prompt,
    });

    return response.text || "Could not generate ideas.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    throw error;
  }
};