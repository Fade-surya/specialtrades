# Deploying Your Minecraft Trading Website to Vercel

This guide provides step-by-step instructions for deploying your Minecraft Trading Website to Vercel.

## Prerequisites

1. A GitHub account with your project uploaded
2. A Vercel account (you can sign up with your GitHub account)

## Step 1: Download Updated Project Files

First, download the following updated files I've created for you:

- `vercel.json` - Contains Vercel-specific configuration
- `vercel-build.js` - Special build script for Vercel
- `VERCEL_DEPLOYMENT.md` - This guide

## Step 2: Update Your GitHub Repository

1. Add these files to your GitHub repository:
   - Upload `vercel.json` to the root of your repository
   - Upload `vercel-build.js` to the root of your repository
2. Commit and push these changes to your GitHub repository

## Step 3: Connect Repository to Vercel

1. Go to [Vercel](https://vercel.com/) and log in (or sign up with your GitHub account)
2. Click "Add New..." > "Project"
3. Select your GitHub repository
4. On the "Configure Project" screen:
   - **Framework Preset**: Select "Vite" from the dropdown (or "Other" if Vite isn't available)
   - **Root Directory**: Leave as `.` (the root of your project)
   - **Build Command**: Use `npm run build` (this should be pre-filled)
   - **Output Directory**: Make sure it says `dist`
   - **Install Command**: This should be `npm install` by default

## Step 4: Add Environment Variables

In the same "Configure Project" screen:

1. Expand the "Environment Variables" section
2. Add the following variable:
   - **Name**: `MALLU_API_KEY`
   - **Value**: Your Mallu API key
3. Add any other environment variables your project needs

## Step 5: Deploy

1. Click "Deploy"
2. Wait for the build process to complete (this may take a few minutes)
3. Vercel will provide you with a deployment URL (example: `minecraft-trading.vercel.app`)

## Step 6: Fix Deployment Issues (If Needed)

If your site is showing code instead of the actual website:

1. Go to your Vercel project dashboard
2. Click "Settings" tab
3. Go to "General" > "Build & Development Settings"
4. Override settings:
   - **Framework Preset**: Set to "Other"
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
5. Click "Save"
6. Go to "Deployments" tab
7. Find your latest deployment and click the three dots (...)
8. Select "Redeploy"

## Step 7: Verify Deployment

After redeploying:

1. Visit your deployment URL
2. Check that the website loads properly (not showing code)
3. Test all features:
   - Home page and navigation
   - Order form submission
   - API connections

## Connecting a Custom Domain

To use your own domain (if you have one):

1. Go to your Vercel project dashboard
2. Click "Settings" tab
3. Go to "Domains"
4. Enter your domain name and click "Add"
5. Follow Vercel's instructions to update your DNS settings

## Troubleshooting

If you still see source code instead of your website:

1. Make sure you've added `vercel.json` to your GitHub repository
2. Try using a different framework preset in Vercel settings
3. Check your build logs for any errors

If API routes don't work:

1. Verify your environment variables are set correctly
2. Check that your server-side code is compatible with serverless functions

## Maintaining Your Deployment

When you make changes to your project:

1. Update your code in GitHub
2. Vercel will automatically detect changes and redeploy
3. Monitor the deployment in your Vercel dashboard