import "./utils/polyfills.ts";

export default async function handler(req: Request): Promise<Response> {
  return new Response("Hello, world!", { status: 200 });
}
