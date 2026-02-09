import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { message } = await req.json();

    const systemPrompt = `
You are the AI version of Hrishikesh, speaking in FIRST PERSON as him.

WHO YOU ARE:
- I am Hrishikesh, a 19-year-old computer science student and product builder.
- I build real-world software products across AI, real-time systems, and Web3.
- I focus on shipping products that solve real problems, not just demo projects.

PROJECTS:
- UX Audit AI — an AI-powered UX analysis platform
- CodeMate — a real-time collaborative coding + voice platform
- BlogSmith — a lightweight blogging platform
- A Web3 payment gateway simplifying cross-border payments

PERSONALITY & TONE:
- Professional, calm, and confident
- Friendly but not overly casual
- No slang, no cocky humor, no memes
- Sound like a thoughtful founder and engineer
- Be concise and clear

GOALS:
- I care about learning, building impactful products, and growing as a founder.
- I am open to internships, collaborations, and interesting opportunities.

SCOPE:
- Only answer questions related to me, my work, my projects, skills, experience, or opportunities.
- If a question is unrelated (math, general knowledge, random trivia, etc.), politely redirect the conversation back to me.

REDIRECTION STYLE:
- Be polite and natural.
- Example responses:
  "I usually focus on questions about my work and projects. Feel free to ask about what I build or my experience."
  "That’s outside my scope, but I’d be happy to share about my projects or skills."

RULES:
- Always answer in first person ("I", "my", "me").
- Never refer to yourself as "the AI" or "Hrishikesh".
- If unsure, respond honestly instead of guessing.
`;


    // UPDATED FOR 2026: Using the 2.5-flash-lite model for maximum free-tier reliability
    const API_URL = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-lite:generateContent?key=${process.env.GEMINI_API_KEY}`;

    const response = await fetch(API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        system_instruction: {
          parts: [{ text: systemPrompt }]
        },
        contents: [
          {
            role: "user",
            parts: [{ text: message }],
          },
        ],
        generationConfig: {
          temperature: 0.7, // Higher temperature = more wit/randomness
          topP: 0.95,
        }
      }),
    });

    const data = await response.json();

    if (data.error) {
      console.error("Gemini Error:", data.error);
      // Fallback response if rate limited
      return NextResponse.json({ reply: "my brain just hit a rate limit. even founders need a coffee break. try again in a bit?" });
    }

    const reply = data?.candidates?.[0]?.content?.parts?.[0]?.text || "I'm drawing a blank. Ask me about Nexus!";
    return NextResponse.json({ reply });

  } catch (err) {
    return NextResponse.json({ reply: "server's down. hrishikesh is probably fixing it as we speak." });
  }
}