// Import Express
const express = require('express')

// Create an Express app
const app = express()


// Define routes here (we'll add them soon)
// GET http://localhost:3000/


// 1. Be Polite, Greet the User
// Task: Create a route that responds to URLs like /greetings/<username-parameter>.

// Examples: Matches routes like /greetings/Christy or /greetings/Mathilda.

// Response: Include the username from the URL in the response, such as “Hello there, Christy!” or “What a delight it is to see you once more, Mathilda.”

app.get('/greetings/:name', (req, res) => {
    return res.send(`<h1>Hello there, ${req.params.name}!</h1>`);
})






//   2. Rolling the Dice
// Task: Set up a route to handle URLs following the pattern /roll/<number-parameter>.

// Examples: Matches routes like /roll/6 or /roll/20.

// Validation: If the parameter is not a number, respond with “You must specify a number.” For instance, /roll/potato should trigger this response.

// Functionality: If a valid number is provided, respond with a random whole number between 0 and the given number. For example, a request to /roll/16 might respond with “You rolled a 14.”

app.get('/roll/:number', (req, res) => {
    if (!Number.isInteger(parseInt(req.params.number))) {
        return res.send('you must specify a number');
    } else {
        //randomise
// math.random and math.floor to make sure its integer then send a response with line41
        return res.send(`you have rolled a ${(Math.floor(Math.random()*(req.params.result)))}`)
    }
})


// 3. I Want THAT One!
// Task: Create a route for URLs like /collectibles/<index-parameter>.

// Examples: Matches routes such as /collectibles/2 or /collectibles/0.

app.get('/collectibles/:indexParam', (req, res) => {
    const collectibles = [
    { name: 'shiny ball', price: 5.95 },
    { name: 'autographed picture of a dog', price: 10 },
    { name: 'vintage 1970s yogurt SOLD AS-IS', price: 0.99 }

    //hasOwnProperty = checks if an array has an index value
];
// if (collectibles.hasOwnProperty(req.params.indexParam)) {
//   return res.send(`So you want the $(collectibles[req.params.indexParam].name}? For $(collectibles[req.params.indexParam].price} generic units of money, it can be yours!`))`);
// } else {
//  return res.send(`This)}
//   'This item is not yet in stock. Check back soon!'
// })
//   Validation: If the index does not correspond to an item in the array, respond with “This item is not yet in stock. Check back soon!”

//   Response: Should describe the item at the given index, like “So, you want the shiny ball? For 5.95, it can be yours!” Include both the name and price properties.
  
  


app.get('/hello', (req, res) => {

    { name: "Birkenstocks", price: 50, type: "sandal" },
    { name: "Air Jordans", price: 500, type: "sneaker" },
    { name: "Air Mahomeses", price: 501, type: "sneaker" },
    { name: "Utility Boots", price: 20, type: "boot" },
    { name: "Velcro Sandals", price: 15, type: "sandal" },
    { name: "Jet Boots", price: 1000, type: "boot" },
    { name: "Fifty-Inch Heels", price: 175, type: "heel" }




    res.send(`Hello there, ${req.query.name}! I hear you are ${req.query.age} years old!`);
});









// Listen for requests on port 3000
app.listen(3000, () => {
    console.log('')
  })
  