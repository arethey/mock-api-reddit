const express = require('express');
const fs = require('fs').promises;
const app = express();
const PORT = 3000;

async function getSubmissions() {
    try {
        const data = await fs.readFile('./data/submission.json', 'utf8');
        return JSON.parse(data);
    } catch (error) {
        console.error("Error reading submission data file:", error);
        return [];
    }
}

async function getComments() {
    try {
        const data = await fs.readFile('./data/comment.json', 'utf8');
        return JSON.parse(data);
    } catch (error) {
        console.error("Error reading comment data file:", error);
        return [];
    }
}

app.get('/reddit/search/submission', async (req, res) => {
    let submissions = await getSubmissions();
    res.json({ data: submissions });
});

app.get('/reddit/search/comment', async (req, res) => {
    let comments = await getComments();
    res.json({ data: comments });
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
