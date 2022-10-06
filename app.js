const express = require('express');
const cors = require('cors');

function middleSetup(app) {
  app.use(cors()); // Allow cross-origin requests
  app.use(express.json()); // Allow app to read the body of POST requests
}

// TODO Read generated dogs from a file

const app = express();

middleSetup(app);

const cats = require('./cats/cats');
const dogs = require('./dogs/dogs');

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
  res.status(200).send(req.body);
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

app.get('/cats/:id', (req, res) => {
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

module.exports = { app };
