const fs = require('fs');
let s = fs.readFileSync('src/data/blog.ts', 'utf8');

// 1. Rename titles
s = s.replace('Professional Drain Cleaning vs Store-Bought Chemicals', 'How Much Does a Plumber Cost in Anaheim CA?');
s = s.replace('The Emergency Plumbing Checklist Every Household Needs', '24 Hour Emergency Plumbing: What to Do Before the Plumber Arrives');
s = s.replace('7 Signs Your Water Heater Needs Replacement', 'Water Heater Repair vs Replacement in Anaheim');
s = s.replace('The Real Benefits Of A Sewer Camera Inspection', 'Sewer Camera Inspection: When Do You Need One?');
s = s.replace('Is Your Water Pressure Too High? How To Check', 'How to Detect a Hidden Water Leak in Your Anaheim Home');
s = s.replace('Tree Roots In Sewer Lines: Prevention And Repair', 'How Often Should You Clean Your Main Sewer Line?');
s = s.replace('Gas Leak Warning Signs Every Homeowner Should Know', 'Gas Leak Warning Signs Every Anaheim Homeowner Should Know');

function addLinks(title, linksStr) {
  const findStr = 'title: "' + title + '",';
  const pieces = s.split(findStr);
  if (pieces.length === 2) {
    // we need to find the end of the takeaways array.
    // The takeaways array looks like:
    // takeaways: [
    //   "...",
    //   "..."
    // ],
    const match = pieces[1].match(/takeaways:\s*\[[\s\S]*?\],/);
    if (match) {
      const takeawayStr = match[0];
      const newTakeawayStr = takeawayStr + '\n    relatedLinks: ' + linksStr + ',';
      pieces[1] = pieces[1].replace(takeawayStr, newTakeawayStr);
      s = pieces[0] + findStr + pieces[1];
    }
  }
}

addLinks('How Much Does a Plumber Cost in Anaheim CA?', "[{label: 'Emergency Plumbing Anaheim', url: '/emergency-plumbing-anaheim-ca'}, {label: 'Plumbing Repair Anaheim', url: '/plumbing-repair-anaheim-ca'}]");
addLinks('24 Hour Emergency Plumbing: What to Do Before the Plumber Arrives', "[{label: 'Emergency Plumbing Anaheim', url: '/emergency-plumbing-anaheim-ca'}, {label: 'Leak Detection Anaheim', url: '/leak-detection-anaheim-ca'}]");
addLinks('Water Heater Repair vs Replacement in Anaheim', "[{label: 'Emergency Plumbing Anaheim', url: '/emergency-plumbing-anaheim-ca'}, {label: 'Water Heater Repair Anaheim', url: '/water-heater-repair-anaheim-ca'}]");
addLinks('Sewer Camera Inspection: When Do You Need One?', "[{label: 'Camera Inspection Anaheim', url: '/camera-inspection-anaheim-ca'}, {label: 'Drain Cleaning Anaheim', url: '/drain-cleaning-anaheim-ca'}, {label: 'Emergency Plumbing Anaheim', url: '/emergency-plumbing-anaheim-ca'}]");
addLinks('How to Detect a Hidden Water Leak in Your Anaheim Home', "[{label: 'Leak Detection Anaheim', url: '/leak-detection-anaheim-ca'}, {label: 'Emergency Plumbing Anaheim', url: '/emergency-plumbing-anaheim-ca'}]");
addLinks('How Often Should You Clean Your Main Sewer Line?', "[{label: 'Drain Cleaning Anaheim', url: '/drain-cleaning-anaheim-ca'}, {label: 'Sewer Line Repair Anaheim', url: '/sewer-line-repair-anaheim-ca'}, {label: 'Emergency Plumbing Anaheim', url: '/emergency-plumbing-anaheim-ca'}]");
addLinks('Gas Leak Warning Signs Every Anaheim Homeowner Should Know', "[{label: 'Emergency Plumbing Anaheim', url: '/emergency-plumbing-anaheim-ca'}, {label: 'Leak Detection Anaheim', url: '/leak-detection-anaheim-ca'}]");

fs.writeFileSync('src/data/blog.ts', s);
