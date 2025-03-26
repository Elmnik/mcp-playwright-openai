// Open AI Client

import { OpenAI } from 'openai';
import 'dotenv/config';

export const askGPT = async (prompt: string): Promise<string> => {
    return "Playwright is a browser automation tool for testing."; //Mocked response because of quote response from openai
    const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY // Load from .env
    });

    const response = await openai.chat.completions.create({
    model: "gpt-3.5-turbo", // or "gpt-4"
    messages: [{ role: "user", content: prompt }],
    });

    return response.choices[0].message.content!;
};