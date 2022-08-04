// here are the dependencies
const express = require('express');
const path = require ('path');
const dataJSON = require('./db/db.json');
const fs = require('fs');
const {v4: uuidv4 } = require('uuid');

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
app.get('/api/notes', (req, res) => {
    fs.readFile(dataJSON).then((data) =>
    res.json(JSON.parse(data)))
});

app.post ('/api/notes', (req, res) => { 
    const {title, text} = req.body;

    if (title && text) {
        const curentNote = {
            title, 
            text,
            id: uuidv4(),
        };

        fs.readFile(curentNote, 'utf8', (err, data) => {
            if (err) {
              console.error(err);
            } else {
              const parsedData = JSON.parse(data);
              parsedData.push(content);
              writeToFile(curentNote, parsedData);
            }
          });

    }
})

// here is the listener 
app.listen(PORT, () => 
console.log(`Example app listening at http://localhost:${PORT}`)
);

