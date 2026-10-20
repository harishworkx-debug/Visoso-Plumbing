const fs = require('fs');

const locationsContent = fs.readFileSync('src/data/locations.ts', 'utf8');
const servicesContent = fs.readFileSync('src/data/services.ts', 'utf8');
const blogContent = fs.readFileSync('src/data/blog.ts', 'utf8');

const extractSlugs = (content) => {
  const slugs = [];
  const regex = /slug:\s*["']([^"']+)["']/g;
  let match;
  while ((match = regex.exec(content)) !== null) {
    if (!slugs.includes(match[1])) {
      slugs.push(match[1]);
    }
  }
  return slugs;
};

const locations = extractSlugs(locationsContent);
const services = extractSlugs(servicesContent);
const blogs = extractSlugs(blogContent);

const today = new Date().toISOString().slice(0, 10);

let xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n`;
let urlCount = 0;

function addUrl(path, priority, changefreq = 'weekly') {
  xml += `  <url>\n    <loc>https://www.visosoplomeriaeconomica.com${path}</loc>\n    <lastmod>${today}</lastmod>\n    <changefreq>${changefreq}</changefreq>\n    <priority>${priority}</priority>\n  </url>\n`;
  urlCount++;
}

// 1. Core pages
addUrl('/', '1.0', 'daily');
addUrl('/services/', '0.9');
addUrl('/service-areas/', '0.9');
addUrl('/about/', '0.8');
addUrl('/contact/', '0.8');
addUrl('/blog/', '0.8');
addUrl('/privacy-policy/', '0.4', 'monthly');
addUrl('/terms/', '0.4', 'monthly');

// 2. Location hub pages (plumber-{city}-ca)
locations.forEach(loc => {
  addUrl(`/plumber-${loc}-ca/`, '0.9');
});

// 3. Service pages per location ({service}-{city}-ca)
services.forEach(srv => {
  locations.forEach(loc => {
    addUrl(`/${srv}-${loc}-ca/`, '0.8');
  });
});

// 4. Blog articles
blogs.forEach(slug => {
  addUrl(`/blog/${slug}/`, '0.7');
});

xml += '</urlset>\n';

fs.writeFileSync('public/sitemap.xml', xml, 'utf8');
console.log(`Successfully generated public/sitemap.xml with ${urlCount} total URLs!`);
console.log(`- Core Pages: 8`);
console.log(`- Location Hubs: ${locations.length}`);
console.log(`- Service-Location Pages: ${services.length * locations.length} (${services.length} services x ${locations.length} locations)`);
console.log(`- Blog Guides: ${blogs.length}`);
