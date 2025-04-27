const express = require('express');
const axios = require('axios');
const path = require('path');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.static(path.join(__dirname, 'public')));

app.get('/api/tokens', async (req, res) => {
  try {
    const response = await axios.get('https://api.tensor.trade/v1/trpc/tokenRecentListings.get');
    res.json(response.data);
  } catch (error) {
    console.error('Error fetching tokens:', error.message);
    res.status(500).json({ error: 'Failed to fetch tokens' });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
