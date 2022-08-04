// here are the dependencies
const express = require('express');
const path = require ('path');
const data = require('./db/db.json')

// here express is initialized
const PORT = process.env.port || 3001;
const app = express();


// here is the Middleware
app.use(express.urlencoded({ extended: true}));
app.use(express.json());
app.use(express.static('public'));

// html routes
app.get('/', (req, res) => res.sendFile(path.join(__dirname, 'public/index.html')));

app.get('/notes', (req, res) => res.sendFile(path.join(__dirname, 'public/notes.html')));

// API routes
app.get('/api/notes', (req, res) => res.json(data));

app.post ('/api/notes', (req, res) => { })

// here is the listener 
app.listen(PORT, () => 
console.log(`Example app listening at http://localhost:${PORT}`)
);

