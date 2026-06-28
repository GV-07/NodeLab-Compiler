import { GoogleGenAI } from "@google/genai";
import { Dish, PhotoStyle } from "../types";

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

const STYLE_PROMPTS = {
  rustic: "Food photography, moody lighting, dark wooden background, rustic texture, hyper-realistic, 8k, professional lighting, shallow depth of field, warm tones, high-end restaurant plating.",
  bright: "Food photography, bright airy lighting, minimalist marble background, modern clean aesthetic, high-end restaurant style, vibrant natural colors, soft shadows, sharp focus, 8k.",
  social: "Flat lay food photography, top-down view, social media style, bright colors, organized composition, high-end food styling, trendy aesthetic, overhead shot, sharp details."
};

export async function parseMenu(menuText: string): Promise<Dish[]> {
  const prompt = `
    You are an expert menu analyzer. I will give you a text-based menu. 
    Analyze it and extract a list of dishes. Each dish should have a name and a detailed visual description for a food photographer.
    
    Format the output as a JSON array of objects:
    [
      { "name": "Dish Name", "description": "Visual description of the dish including ingredients and presentation" }
    ]

    Menu Text:
    ${menuText}
  `;

  try {
    const response = await ai.models.generateContent({
      model: "gemini-3.5-flash", // Using recommended model for text tasks
      contents: prompt,
      config: {
        responseMimeType: "application/json"
      }
    });

    const dishes = JSON.parse(response.text || "[]");
    return dishes.map((d: any, index: number) => ({
      ...d,
      id: `dish-${index}-${Date.now()}`
    }));
  } catch (error) {
    console.error("Error parsing menu:", error);
    return [];
  }
}

export async function generateFoodPhoto(dish: Dish, style: PhotoStyle): Promise<string | null> {
  const stylePrompt = STYLE_PROMPTS[style];
  const prompt = `A professional ${stylePrompt} featuring the dish: ${dish.name}. ${dish.description}. No text or watermarks. High-end food photography.`;

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash-image',
      contents: [
        {
          text: prompt,
        },
      ],
      config: {
        imageConfig: {
          aspectRatio: "1:1",
        },
      },
    });

    for (const part of response.candidates?.[0]?.content?.parts || []) {
      if (part.inlineData) {
        const base64EncodeString = part.inlineData.data;
        return `data:image/png;base64,${base64EncodeString}`;
      }
    }
  } catch (error) {
    console.error("Error generating image:", error);
  }
  return null;
}
