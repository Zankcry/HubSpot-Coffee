const path = require('path');
const fs = require('fs');

module.exports = (req, res) => {
  // Enable CORS
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  // Load the db.json file fresh on each request
  const dbPath = path.join(__dirname, '../db.json');
  let db;
  try {
    db = JSON.parse(fs.readFileSync(dbPath, 'utf-8'));
  } catch (e) {
    return res.status(500).json({ error: 'Failed to load database.' });
  }

  // Extract the resource name from the URL path
  // e.g. /api/products -> "products", /api/customers -> "customers"
  const urlPath = req.url.split('?')[0]; // strip query strings
  const parts = urlPath.replace(/^\/api/, '').replace(/^\//, '').split('/');
  const resource = parts[0];
  const id = parts[1] ? parseInt(parts[1]) : null;

  if (!resource || !db[resource]) {
    return res.status(404).json({ error: `Resource "${resource}" not found.` });
  }

  if (id !== null) {
    const item = db[resource].find(r => r.id === id);
    if (!item) return res.status(404).json({ error: 'Item not found.' });
    return res.status(200).json(item);
  }

  return res.status(200).json(db[resource]);
};
