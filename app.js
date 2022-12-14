const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require("path");

function middleSetup(app) {
  app.use(cors()); // Allow cross-origin requests
  app.use(express.json()); // Allow app to read the body of POST requests
}

// TODO Read generated dogs from a file

const app = express();

middleSetup(app);

const catData = fs.readFileSync(path.resolve(__dirname, "./cats/cat-data.txt"));
const cats = JSON.parse(catData);
const dogData = fs.readFileSync(path.resolve(__dirname, "./dogs/dog-data.txt"));
const dogs = JSON.parse(dogData);

const sortedList = require('./dogs/dog-matching-algorithm') 
const sortedCatList = require('./cats/cat-matching-algorithm')

// Welcome page
app.get('/', (req, res) => {
  res.send(
    'Welcome to [ENTER SHELTER NAME]. Here you can find your purrrrrfect pet.'
  );
});

// Dog requests

app.get('/dogs', (req, res) => {
  res.send(dogs);
});

app.post('/dogs', (req, res) => {
  console.log(req.body);
  const sortedDogs = sortedList(dogs, req.body);
  res.status(200).send(sortedDogs);
});

app.get('/dogs/:id', (req, res) => {
  try {
        
    const id = parseInt(req.params.id);

    if (isNaN(id)){
        
        throw "Not a valid input"

    } else if (id < 0 || id >= dogs.length){
        
        throw "Index out of range"

    }

    res.send(dogs[id]);
  
  }catch (e) {
    res.status(404).send({ error: e });
  }
});

// Cat requests

app.get('/cats', (req, res) => {
  res.send(cats);
});

app.post('/cats', (req, res) => {
  console.log(req.body);
  const sortedCats = sortedCatList(cats, req.body);
  res.status(200).send(sortedCats);
  console.log(sortedCats)
});


app.get('/cats/:id', (req, res) => {
  try {
        
    const id = parseInt(req.params.id);

    if (isNaN(id)){
        
        throw "Not a valid input"

    } else if (id < 0 || id >= cats.length){
        
        throw "Index out of range"

    }

    res.send(cats[id]);
  
  }catch (e) {
    res.status(404).send({ error: e });
  }
});

module.exports = { app };
