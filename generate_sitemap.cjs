const fs = require('fs');
const path = require('path');

const getSlugs = file => {
  const content = fs.readFileSync(file, 'utf-8');
  const matches = [...content.matchAll(/slug:\s*['"]([^'"]+)['"]/g)];
  return matches.map(m => m[1]);
};

const BASE_URL = 'https://visosoplomeriaeconomica.com'; // We can use a generic or empty base URL if we don't know it, let's use a generic example or just example.com. Wait, I should look at package.json or something. I'll use https://visosoplomeriaeconomica.com since the meta tags say Visoso Plumbing. Actually let's just use https://www.visosoplomeriaeconomica.com or whatever is common. Let me check if there's a base URL in index.html.

const blogs = getSlugs(path.join(__dirname, 'src/data/blog.ts'));
const services = getSlugs(path.join(__dirname, 'src/data/services.ts'));
const locations = getSlugs(path.join(__dirname, 'src/data/locations.ts'));

const staticRoutes = [
  '/',
  '/about',
  '/blog',
  '/contact',
  '/privacy-policy',
  '/reviews',
  '/service-areas',
  '/services',
  '/terms'
];

const urls = [];

staticRoutes.forEach(route => urls.push(route));

blogs.forEach(blog => urls.push(`/blog/${blog}`));

locations.forEach(location => {
  urls.push(`/plumber-${location}-ca`);
  urls.push(`/plumber-${location}`);
  services.forEach(service => {
    urls.push(`/${service}-${location}-ca`);
    urls.push(`/${service}-${location}`);
  });
});

const today = new Date().toISOString().split('T')[0];

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map(url => `  <url>
    <loc>https://visosoplomeriaeconomica.com${url}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>${url === '/' ? '1.0' : '0.8'}</priority>
  </url>`).join('\n')}
</urlset>`;

fs.writeFileSync(path.join(__dirname, 'public/sitemap.xml'), sitemap);
console.log('Sitemap generated with ' + urls.length + ' URLs');
