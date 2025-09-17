import handler from "./handler.ts";

Deno.serve((request: Request) => {
  return handler(request);
});
