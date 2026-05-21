const db = require('./db.json');

module.exports = (req, res) => {
  // Enable CORS
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  // Get the original requested path robustly
  const matchedPath = req.headers['x-matched-path'] || req.headers['x-forwarded-uri'] || req.url || '';
  const urlPath = matchedPath.split('?')[0]; // strip query strings
  const cleanPath = urlPath.replace(/^\/api/, '').replace(/^\//, '');
  const parts = cleanPath.split('/').filter(Boolean);

  // If path is empty or resolved to the serverless function name itself, return api info
  if (parts.length === 0 || parts[0] === 'server') {
    return res.status(200).json({
      message: "HubSpot Coffee API is running!",
      endpoints: Object.keys(db).map(key => `/api/${key}`)
    });
  }

  const resource = parts[0];
  const id = parts[1] ? parseInt(parts[1], 10) : null;

  if (!db[resource]) {
    return res.status(404).json({ 
      error: `Resource "${resource}" not found.`,
      endpoints: Object.keys(db).map(key => `/api/${key}`)
    });
  }

  if (id !== null && !isNaN(id)) {
    const item = db[resource].find(r => r.id === id);
    if (!item) return res.status(404).json({ error: `Item with ID ${id} not found.` });
    return res.status(200).json(item);
  }

  return res.status(200).json(db[resource]);
};
