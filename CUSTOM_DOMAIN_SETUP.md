# Setting Up a Custom Domain

This guide explains how to connect a custom domain to your Minecraft Trading Website after deploying it to various hosting platforms.

## Option 1: Using GitHub Pages

If you've deployed your site to GitHub Pages:

1. Go to your repository on GitHub
2. Click on "Settings"
3. Scroll down to the "GitHub Pages" section
4. Under "Custom domain", enter your domain name and click "Save"
5. GitHub will create a file called `CNAME` in your repository
6. Follow the DNS configuration steps below

## Option 2: Using Vercel

If you've deployed your site to Vercel:

1. Go to your project on the Vercel dashboard
2. Click on "Settings"
3. Go to the "Domains" section
4. Enter your domain name and click "Add"
5. Follow the DNS configuration instructions provided by Vercel

## Option 3: Using Netlify

If you've deployed your site to Netlify:

1. Go to your site on the Netlify dashboard
2. Click on "Domain settings"
3. Click on "Add custom domain"
4. Enter your domain name and click "Verify"
5. Follow the DNS configuration instructions provided by Netlify

## DNS Configuration (General Steps)

You'll need to update your domain's DNS settings at your domain registrar (GoDaddy, Namecheap, Google Domains, etc.):

### For a root domain (example.com):

Add an A record:
- Host/Name: @ (or leave blank)
- Value/Points to: The IP address provided by your hosting service
- TTL: 3600 (or recommended value)

### For a subdomain (www.example.com):

Add a CNAME record:
- Host/Name: www (or your subdomain)
- Value/Points to: Your hosting URL (e.g., yourusername.github.io)
- TTL: 3600 (or recommended value)

## Verifying and Troubleshooting

1. After setting up DNS records, it may take 24-48 hours for changes to propagate globally
2. You can check propagation using tools like [whatsmydns.net](https://www.whatsmydns.net/)
3. To verify your SSL certificate is working, access your site with https:// prefix

## SSL Configuration

Most hosting services provide free SSL certificates:

- **GitHub Pages**: Automatically provides SSL for custom domains
- **Vercel**: Automatically issues SSL certificates for all domains
- **Netlify**: Automatically provides SSL via Let's Encrypt

If your hosting doesn't provide automatic SSL, you can use [Cloudflare](https://www.cloudflare.com/) as a free solution:

1. Sign up for a Cloudflare account
2. Add your domain to Cloudflare
3. Update your domain's nameservers to Cloudflare's nameservers
4. Enable the SSL/TLS setting in your Cloudflare dashboard

## Email Configuration

If you want to use email with your custom domain (e.g., contact@yourdomain.com):

1. Sign up for an email service (G Suite, Zoho Mail, etc.)
2. Add MX records to your domain's DNS settings:
   - Host/Name: @ (or leave blank)
   - Value/Points to: The mail server provided by your email service
   - Priority: As specified by your email service
   - TTL: 3600 (or recommended value)

## Support Resources

If you encounter issues:
- Check your hosting provider's documentation
- Contact your domain registrar's support
- Visit [Stack Overflow](https://stackoverflow.com/) for technical assistance