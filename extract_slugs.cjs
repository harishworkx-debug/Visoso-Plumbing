const fs = require('fs');
const getSlugs = file => {
  const content = fs.readFileSync(file, 'utf-8');
  const matches = [...content.matchAll(/slug:\s*['"]([^'"]+)['"]/g)];
  return matches.map(m => m[1]);
};

console.log('BLOGS:', getSlugs('src/data/blog.ts').join(', '));
console.log('SERVICES:', getSlugs('src/data/services.ts').join(', '));
console.log('LOCATIONS:', getSlugs('src/data/locations.ts').join(', '));
