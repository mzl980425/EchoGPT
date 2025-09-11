export const isDev = Deno.env.get("NODE_ENV") === "development";

export const isProd = Deno.env.get("NODE_ENV") === "production";

export const isCloudflare = !!Deno.env.get("CLOUDFLARE_ACCOUNT_ID");

export const isDenoDeploy = !!Deno.env.get("DENO_DEPLOYMENT_ID");

export const isDenoDeployEA = !!Deno.env.get("DENO_DEPLOY");

console.log("================================= Environment Variables =================================");
Object.entries(Deno.env.toObject()).forEach(([key, value]) => {
  console.log(`${key}=${value}`);
});
console.table({ isCloudflare, isDenoDeploy, isDenoDeployEA, isDev, isProd });
