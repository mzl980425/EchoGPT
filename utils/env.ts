export const isDev = Deno.env.get("NODE_ENV") === "development";

export const isDenoDeploy = !!Deno.env.get("DENO_DEPLOYMENT_ID");

export const isDenoDeployEA = !!Deno.env.get("DENO_DEPLOY");

console.log('================================= Environment Variables =================================')
Object.entries(Deno.env.toObject()).forEach(([key, value]) => {
  console.log(`${key}=${value}`);
});
