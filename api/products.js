module.exports = (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  try {
    const db = require('./db.json');
    return res.status(200).json(db.products);
  } catch (error) {
    return res.status(500).json({
      error: "Error loading db.json",
      message: error.message,
      stack: error.stack
    });
  }
};
