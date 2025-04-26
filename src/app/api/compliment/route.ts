import { google } from "@ai-sdk/google";
import { streamText } from "ai";

export const runtime = "edge";

export async function POST() {
  const result = await streamText({
    model: google("models/gemini-1.5-pro"),
    prompt:
      "Gimme a random and creative compliment for today. Keep it short, around 1-2 sentences. Each time make it a bit different.",
    temperature: 0.9,
  });

  return result.toDataStreamResponse();
}
