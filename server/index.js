const express = require("express");
const cors = require("cors");

const app = express();


app.use(cors());

app.use(express.json()); // When we want to be able to accept JSON.

app.get("/api/compliment", (req, res) => {
  const compliments = ["Gee, you're a smart cookie!",
    "Cool shirt!",
    "Your Javascript skills are stellar.",
  ];

  let randomIndex = Math.floor(Math.random() * compliments.length);
  let randomCompliment = compliments[randomIndex];
  res.status(200).send(randomCompliment);

});

//show a random fortune when fortune button is pushed
app.get('/api/fortunes', function (req, res) { 
  const fortunes = [
    'A beautiful, smart, and loving person will be coming into your life.',
    'A golden egg of opportunity falls into your lap this month.',
    'A good time to finish up old tasks. ',
    'A lifetime friend shall soon be made.',
    'A new perspective will come with the new year. ',
    'A short pencil is usually better than a long memory any day.'
  ]
  //randonly select the fortune to display
  let randomIndex = Math.floor(Math.random() * fortunes.length);
  let randomFortune = fortunes[randomIndex];
  res.status(200).send(randomFortune);
})
//create a default array wish list for the user to add too
const items = ['World Peace', ' Jet Ski', ' Devmountain Certificate'];
//show the listed wishes when wish list is pressed
app.get('/api/items', function(req, res) {
  res.status(200).send(items);
})
//add the new input to the items/wishes array
app.post('/api/items', function(req, res) {
  const { newItem } = req.body;
  items.push(newItem);
  res.status(200).send(items); 
})
//delete wish from the array
app.delete('/api/items/:tgtIndex', function(req, res) {
  const tgtIndex = +req.params.tgtIndex;
  items.splice(tgtIndex, 1);  
  res.status(200).send(items)
})
//get the server to run on port 4000
app.listen(4000, () => console.log("Server running on 4000"));
