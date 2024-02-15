const express = require('express');
const app = express();
const PORT = 3000;

// Mock data simulating a subset of Reddit submissions by 'spez'
const mockSubmissions = [
    {
        id: 'abc123',
        title: 'Announcing Reddit Mobile',
        author: 'spez',
        url: 'https://reddit.com/r/announcements/comments/abc123',
        created_utc: 1492569573,
        score: 12345,
        subreddit: 'announcements',
    },
    {
        id: 'xyz789',
        title: 'Reddit’s New Content Policy',
        author: 'spez',
        url: 'https://reddit.com/r/announcements/comments/xyz789',
        created_utc: 1592569573,
        score: 67890,
        subreddit: 'announcements',
    },
    // Add more mock submissions as needed
];

// Route to mimic the Reddit submission search API
app.get('/reddit/submission/search', (req, res) => {
    // Extracting the 'author' query parameter
    const author = req.query.author;

    if (!author) {
        return res.status(400).json({ error: 'Author query parameter is required' });
    }

    // Filter submissions by author (this example uses 'spez' statically)
    const results = mockSubmissions.filter(submission => submission.author === author);

    // Return filtered submissions
    res.json(results);
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
