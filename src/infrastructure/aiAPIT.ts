//Calls AI (Open AI)
import OpenAI from "openai";

export async function getAiConnection(apiKey: string) {
  const client = new OpenAI({
    apiKey: apiKey,
  });

  const response = await client.responses.create({
    model: "gpt-5.2",
    instructions: `You are a helpful movie assistant. Your user has no idea what they want to watch on a movie night. They want you to choose for them. 
- Take the user request as input.
- Return a JSON array of exactly 5 movie titles that BEST match the request.
- Format: ["Movie id 1", "Movie id 2", ...]
- Do not include explanations or extra text.
- Use The movie database api to get the movie id. 
`,
    input: "我要看动物的电影。小朋友的。PG",
  });
  console.log(response.output_text);

  return response.output_text;
}
