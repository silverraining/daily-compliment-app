import { google } from "@ai-sdk/google";
import { streamText } from "ai";

export const runtime = "edge";

export async function POST() {
  const result = await streamText({
    model: google("models/gemini-1.5-pro"),
    prompt: `
      Generate a completely random, creative, and surprising compliment.
      Make sure it's different every time. It can be funny, poetic, weird, or heartwarming.
      Keep it under 2 short sentences.
    `,
    temperature: 0.95,
    topP: 0.8,
  });

  return result.toDataStreamResponse();
}
