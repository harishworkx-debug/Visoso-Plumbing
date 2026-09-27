const fs = require('fs');

const locationsContent = fs.readFileSync('src/data/locations.ts', 'utf8');
const servicesContent = fs.readFileSync('src/data/services.ts', 'utf8');
const blogContent = fs.readFileSync('src/data/blog.ts', 'utf8');

const extractSlugs = (content) => {
  const slugs = [];
  const regex = /slug:\s*["']([^"']+)["']/g;
  let match;
  while ((match = regex.exec(content)) !== null) {
    slugs.push(match[1]);
  }
  return slugs;
};

const locations = extractSlugs(locationsContent);
const services = extractSlugs(servicesContent);
const blogs = extractSlugs(blogContent);

let xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n`;

function addUrl(path, priority) {
  xml += `  <url>\n    <loc>https://www.visosoplomeriaeconomica.com${path}</loc>\n    <lastmod>2026-09-27</lastmod>\n    <changefreq>weekly</changefreq>\n    <priority>${priority}</priority>\n  </url>\n`;
}

// Core pages
addUrl('/', '1.0');
addUrl('/services/', '0.8');
addUrl('/service-areas/', '0.8');
addUrl('/about/', '0.8');
addUrl('/contact/', '0.8');
addUrl('/blog/', '0.8');

// Location base pages (plumber-{city}-ca)
locations.forEach(loc => addUrl(`/plumber-${loc}-ca/`, '0.9'));

// Service pages per location
services.forEach(srv => {
  locations.forEach(loc => {
    addUrl(`/${srv}-${loc}-ca/`, '0.8');
  });
});

// Blog posts
blogs.forEach(slug => {
  // Ensure the blog array only gets unique ones if duplicates exist
  addUrl(`/blog/${slug}/`, '0.7');
});

xml += '</urlset>';

fs.writeFileSync('public/sitemap.xml', xml);
console.log('Sitemap generated!');
