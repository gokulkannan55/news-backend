const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());

const apiKey = '87b02b0581aa47959575984a24cf106e';

app.get('/news', async (req, res) => {
    try {
      const category = req.query.category || '';
        const url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${apiKey}`;

        const response = await fetch(url);
        const data = await response.json();

        res.json(data);

    } catch (error) {
        console.log(error);
        res.status(500).json({ error: "Failed to fetch news" });
    }
});


app.listen(3000, () => {
    console.log('Server running on http://localhost:3000/news');
});
