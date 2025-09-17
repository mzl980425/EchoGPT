## Deploy

### [Deno Deploy](https://dash.deno.com/)

1. Star and fork the repository.
2. Go to [Deno Deploy](https://dash.deno.com/).
3. Click on "New Project".
4. Select "GitHub" as the deployment source and select the forked repository.
5. Configure the project:
   - Framework Preset: `none`
   - Entrypoint: `api/deno-deploy.ts`
6. Click "Deploy Project" to deploy the project.

### [Deno Deploy<sup>EA</sup>](https://console.deno.com/)

1. Star and fork the repository.
2. Go to [Deno Deploy<sup>EA</sup>](https://console.deno.com/).
3. Click on "New app".
4. Select "GitHub" as the deployment source and select the forked repository.
5. Configure the project:
   - Framework Preset: `No Preset`
   - Entrypoint: `api/deno-deploy.ts`
6. Click "Create App" to deploy the project.

### [Cloudflare Workers](https://workers.cloudflare.com/)

1. Star and fork the repository.
2. Go to [Cloudflare Dashboard](https://dash.cloudflare.com/) -> Compute (Workers) -> Workers & Pages
3. Click on "Create" and import a repository
4. Select "GitHub" as the deployment source and select the forked repository.
5. Configure the project:
   - Build command: `npx deno task build:cloudflare`
   - Deploy command: `cd ./dist/cloudflare && npx wrangler deploy`
6. Click "Create and deploy" to deploy the project.

### [Vercel](https://vercel.com/)

1. Star and fork the repository.
2. Go to [Vercel](https://vercel.com/new).
3. Select "GitHub" as the deployment source and select the forked repository.
4. Configure the project:
   - Framework Preset: `Other`
   - Output Directory: `.`
5. Click "Deploy" to deploy the project.

### [Netlify](https://www.netlify.com/)

1. Star and fork the repository.
2. Go to [Netlify](https://app.netlify.com/start).
3. Select "GitHub" as the deployment source and select the forked repository.
4. Configure the project:
   - Functions directory: `api`
5. Click "Deploy" to deploy the project.

## Develop

```bash
git clone https://github.com/mzl980425/EchoGPT.git
cd EchoGPT
npx deno task dev

# Open in browser: http://localhost:8000/
```
