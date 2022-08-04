// here are the dependencies
const express = require('express');
const path = require ('path');

// here express is initialized
const app = express();
const PORT = 3001;

// here is the Middleware
app.use(express.urlencoded({ extended: true}));
app.use(express.json());
app.use(express.static('public'));

// routes
app.get('/',(req,res) => res.send('Navigate to /index or /notes'));

app.get('/index', (req, res) => 
    res.sendFile(path.join(__dirname, 'public/index.html'))
);

app.get('/notes', (req, res) => 
    res.sendFile(path.join(__dirname, 'public/notes.html'))
);

// here is the listener 
app.listen(PORT, () => 
console.log(`Example app listening at http:localhost${PORT}`)
);

