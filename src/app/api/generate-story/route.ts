// File: src/app/api/generate-story/route.ts

import { NextResponse } from "next/server";
import OpenAI from "openai";
import { StoryOptions, StoryResponse } from "@/types";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(request: Request) {
  const { genre, narrativeStyle, audience, userIdea }: StoryOptions =
    await request.json();

  const systemMessage = `
    Eres un asistente que genera historias. La historia debe estar en formato de texto plano.
    Género: ${genre}
    Estilo Narrativo: ${narrativeStyle}
    Audiencia: ${audience}
    ${userIdea ? `Idea Adicional: ${userIdea}` : ""}
    Responde únicamente con el texto de la historia.
  `;

  try {
    const completion = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [{ role: "system", content: systemMessage }],
    });

    const story = completion.choices[0].message.content.trim();

    const response: StoryResponse = { story };
    console.log(story)
    return NextResponse.json(response);
  } catch (error) {
    return NextResponse.error();
  }
}
