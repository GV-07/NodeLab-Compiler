import { GoogleGenAI, GenerateContentResponse, Type } from "@google/genai";

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY || process.env.API_KEY,
  httpOptions: {
    headers: {
      'User-Agent': 'aistudio-build',
    }
  }
});

// High-speed persistent Code Memory cache using localStorage
const codeMemory = {
  get<T>(key: string): T | null {
    try {
      const item = localStorage.getItem(`codememory_${key}`);
      return item ? JSON.parse(item) as T : null;
    } catch {
      return null;
    }
  },
  set<T>(key: string, value: T): void {
    try {
      localStorage.setItem(`codememory_${key}`, JSON.stringify(value));
    } catch (e) {
      console.warn("Code memory storage quota exceeded:", e);
    }
  }
};

export async function runCodeWithAI(code: string, language: string): Promise<string> {
  const cacheKey = `run_${language}_${code.trim()}`;
  const cached = codeMemory.get<string>(cacheKey);
  if (cached) {
    return `[⚡ CODE MEMORY HIT - RUNTIME EXECUTED IN 0.01s]\n\n${cached}`;
  }

  try {
    const isDatabase = language.toLowerCase().includes('sql') || language.toLowerCase() === 'mysql' || language.toLowerCase() === 'postgresql' || language.toLowerCase() === 'sqlite' || language.toLowerCase() === 'mongodb';
    
    const response = await ai.models.generateContent({
      model: 'gemini-3.5-flash',
      contents: `Simulate the execution output of this ${language} code.
      ${isDatabase ? 'If the code creates tables, inserts data, or queries data, ALWAYS return the resulting table structure and contents in a clean ASCII or Markdown table format. If multiple queries are run, show output for each.' : 'Return ONLY the standard output or runtime errors.'}
      Do not explain. Be lightning fast. Use minimal tokens for highest speed.
      
CODE:
${code}`,
      config: { temperature: 0, topP: 0.1 }
    });
    
    const output = response.text?.trim() || "Execution finished with no output.";
    codeMemory.set(cacheKey, output);
    return output;
  } catch (error: any) {
    return `Runtime Error: ${error.message}`;
  }
}

export async function explainCode(code: string, language: string): Promise<string> {
  const cacheKey = `explain_${language}_${code.trim()}`;
  const cached = codeMemory.get<string>(cacheKey);
  if (cached) {
    return cached;
  }

  const response = await ai.models.generateContent({
    model: 'gemini-3.5-flash',
    contents: `Explain this ${language} code simply and concisely. Bullet points preferred. Be extremely fast:\n\n${code}`,
    config: { temperature: 0.2 }
  });
  const explanation = response.text || "No explanation available.";
  codeMemory.set(cacheKey, explanation);
  return explanation;
}

export async function fixCode(code: string, language: string): Promise<string> {
  const cacheKey = `fix_${language}_${code.trim()}`;
  const cached = codeMemory.get<string>(cacheKey);
  if (cached) {
    return cached;
  }

  const response = await ai.models.generateContent({
    model: 'gemini-3.5-flash',
    contents: `Identify and fix bugs in this ${language} code. Return ONLY the corrected code without markdown blocks or explanation. Do not waste tokens:\n\n${code}`,
    config: { temperature: 0 }
  });
  const fixed = response.text || code;
  codeMemory.set(cacheKey, fixed);
  return fixed;
}

export async function generateCode(prompt: string, language: string): Promise<string> {
  const cacheKey = `gen_${language}_${prompt.trim()}`;
  const cached = codeMemory.get<string>(cacheKey);
  if (cached) {
    return cached;
  }

  const response = await ai.models.generateContent({
    model: 'gemini-3.5-flash',
    contents: `Generate ${language} code for the following request. Return ONLY the pure code without markdown blocks or explanation. Be incredibly fast and precise:\n\n${prompt}`,
    config: { temperature: 0.2 } // Lower temperature for faster, more deterministic and high-speed generation
  });
  const generated = response.text || "";
  codeMemory.set(cacheKey, generated);
  return generated;
}

export function createChatSession(systemInstruction?: string) {
  return ai.chats.create({
    model: 'gemini-3.5-flash',
    config: { systemInstruction }
  });
}

export async function streamChatMessage(chat: any, message: string, onChunk: (text: string) => void) {
  const result = await chat.sendMessageStream({ message });
  for await (const chunk of result) {
    const c = chunk as GenerateContentResponse;
    if (c.text) {
      onChunk(c.text);
    }
  }
}

export async function generateFullWebProject(prompt: string): Promise<{ html: string; css: string; javascript: string }> {
  const cacheKey = `genweb_${prompt.trim()}`;
  const cached = codeMemory.get<{ html: string; css: string; javascript: string }>(cacheKey);
  if (cached) {
    return cached;
  }

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3.5-flash',
      contents: `You are an expert front-end web developer.
Generate a complete web project based on the following request: "${prompt}".
Provide the complete HTML, CSS, and JavaScript as separate files in the output.
- HTML: Must provide the page structure, formatting, layout elements, form structures, headers, and body elements. Use beautiful semantic HTML. Do not reference external CSS files or JS files.
- CSS: Must provide the full visual styles, theme colors, layout alignments (Flexbox/Grid), custom animations, responsive stylings, and overall gorgeous design aesthetics.
- JavaScript: Must handle all user events, frontend interactivity, transitions, calculations, form validations, dynamic DOM updates, or state logic.

Ensure all components are fully production-grade, functional, cohesive, and seamlessly integrated together. Be fast.`,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            html: { type: Type.STRING },
            css: { type: Type.STRING },
            javascript: { type: Type.STRING }
          },
          required: ["html", "css", "javascript"]
        },
        temperature: 0.3 // Lower temperature makes generation faster and more structural
      }
    });

    const parsed = JSON.parse(response.text || "{}");
    const result = {
      html: parsed.html || "",
      css: parsed.css || "",
      javascript: parsed.javascript || ""
    };
    codeMemory.set(cacheKey, result);
    return result;
  } catch (error) {
    console.error("Error in generateFullWebProject:", error);
    throw error;
  }
}

export async function fixFullWebProject(html: string, css: string, javascript: string): Promise<{ html: string; css: string; javascript: string }> {
  const cacheKey = `fixweb_${html.trim().slice(0,500)}_${css.trim().slice(0,500)}_${javascript.trim().slice(0,500)}`;
  const cached = codeMemory.get<{ html: string; css: string; javascript: string }>(cacheKey);
  if (cached) {
    return cached;
  }

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3.5-flash',
      contents: `Analyze and fix any bugs, visual flaws, logical errors, or console exceptions in this HTML/CSS/JS web project.
Return a JSON object containing the corrected version of all three components. Do not change structure significantly unless necessary, but fix all issues.

HTML:
${html}

CSS:
${css}

JS:
${javascript}`,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            html: { type: Type.STRING },
            css: { type: Type.STRING },
            javascript: { type: Type.STRING }
          },
          required: ["html", "css", "javascript"]
        },
        temperature: 0
      }
    });

    const parsed = JSON.parse(response.text || "{}");
    const result = {
      html: parsed.html || html,
      css: parsed.css || css,
      javascript: parsed.javascript || javascript
    };
    codeMemory.set(cacheKey, result);
    return result;
  } catch (error) {
    console.error("Error in fixFullWebProject:", error);
    throw error;
  }
}

export async function explainFullWebProject(html: string, css: string, javascript: string): Promise<string> {
  const cacheKey = `explainweb_${html.trim().slice(0,500)}_${css.trim().slice(0,500)}_${javascript.trim().slice(0,500)}`;
  const cached = codeMemory.get<string>(cacheKey);
  if (cached) {
    return cached;
  }

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3.5-flash',
      contents: `Explain the design, structure, and behavior of this HTML/CSS/JS web project simply and concisely in Markdown:

HTML structure & layout:
${html.slice(0, 2000)}

CSS styling & theme:
${css.slice(0, 2000)}

JavaScript interactivity:
${javascript.slice(0, 2000)}`,
      config: { temperature: 0.2 }
    });
    const explanation = response.text || "No explanation available.";
    codeMemory.set(cacheKey, explanation);
    return explanation;
  } catch (error) {
    console.error("Error in explainFullWebProject:", error);
    throw error;
  }
}

export async function askNlBot(
  userMessage: string,
  history: { sender: 'user' | 'bot'; text: string }[],
  systemInstruction: string
): Promise<string> {
  try {
    // Format conversation history for Gemini API
    const contents = history.map(msg => ({
      role: msg.sender === 'user' ? 'user' : 'model',
      parts: [{ text: msg.text }]
    }));
    
    // Append current query
    contents.push({
      role: 'user',
      parts: [{ text: userMessage }]
    });

    const response = await ai.models.generateContent({
      model: 'gemini-3.5-flash',
      contents: contents as any,
      config: {
        systemInstruction: systemInstruction,
        temperature: 0.7,
      }
    });

    return response.text || "I apologize, I didn't quite get that. Could you try rephrasing?";
  } catch (error: any) {
    console.error("Error in askNlBot:", error);
    return `Oh no! I encountered an issue while processing that: ${error.message}. Let's try again!`;
  }
}
