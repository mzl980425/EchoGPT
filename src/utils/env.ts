export const isDenoDeploy = !!Deno.env.get("DENO_DEPLOYMENT_ID");

export const isDenoDeployEA = !!Deno.env.get("DENO_DEPLOY");
