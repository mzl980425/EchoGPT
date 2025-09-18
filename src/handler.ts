import "./utils/polyfills.ts";

export default async function handler(request: Request): Promise<Response> {
  return new Response("Hello world from " + request.url, { status: 200 });
}
