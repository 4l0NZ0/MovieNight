import { AI_API_KEY } from "$env/static/private";
import { getAiConnection } from "../../../../infrastructure/aiAPIT";

export async function GET() {
  //use GetPopular Movies funciton to fetch popular movies.
  //Function takes in an param of type token. Which is our TMDB token.
  //Returns popular movies.

  const text = await getAiConnection(AI_API_KEY);

  //Console log the first movie. For testing purposes.
  console.log(text);
  return new Response(text, { status: 200 });
}
