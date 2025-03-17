const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

app.use(express.json());
app.use(express.static('public'));

let messages = [
    { id: 1, text: 'Hello, world!' },
    { id: 2, text: 'Welcome to our web service' }
];

// Serve the HTML page
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// API to get messages
app.get('/api/messages', (req, res) => {
    res.json(messages);
});

// API to add a new message
app.post('/api/messages', (req, res) => {
    const newMessage = { id: messages.length + 1, text: req.body.text };
    messages.push(newMessage);
    res.status(201).json(newMessage);
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
