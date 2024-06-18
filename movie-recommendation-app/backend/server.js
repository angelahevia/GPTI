// backend/server.js

const express = require('express');
const axios = require('axios');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());

app.post('/api/recommend', async (req, res) => {
  const { mood, category } = req.body;
  const prompt = `Recommend me some ${category} movies that fit the mood: ${mood}`;
  
  try {
    const response = await axios.post('https://api.openai.com/v1/engines/davinci-codex/completions', {
      prompt,
      max_tokens: 150,
    }, {
      headers: {
        'Authorization': `Bearer YOUR_OPENAI_API_KEY`
      }
    });

    const recommendations = response.data.choices[0].text.trim().split('\n').map(movie => {
      return { title: movie, image: 'default-image-url' }; // Replace with actual image URL
    });

    res.json({ recommendations });
  } catch (error) {
    console.error('Error fetching recommendations:', error);
    res.status(500).json({ error: 'Failed to fetch recommendations' });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
