// This file helps with Vercel deployment
import { execSync } from 'child_process';
import fs from 'fs';

// Run the build
console.log('🔨 Running build process...');
execSync('npm run build', { stdio: 'inherit' });

// Create a Vercel serverless function for the API
console.log('🛠️ Setting up API routes for Vercel...');

// Create API directory if it doesn't exist
if (!fs.existsSync('./api')) {
  fs.mkdirSync('./api', { recursive: true });
}

// Create a simple entry point for Vercel serverless functions
const serverlessHandler = `
import { createServer } from 'http';
import { createApp } from '../dist/index.js';

export default async function handler(req, res) {
  const app = await createApp();
  const server = createServer(app);
  return app(req, res);
}
`;

fs.writeFileSync('./api/index.js', serverlessHandler);

console.log('✅ Build completed successfully');