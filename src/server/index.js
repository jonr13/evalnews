const dotenv = require('dotenv');
dotenv.config();
var path = require('path');

//Global Variables
let input


//Require Express to run server and routes
const express = require('express')
const mockAPIResponse = require('./mockAPI.js')
//Stat up an Instance of App
const app = express()

/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware. - allows use to parse JSON
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance - allows requesting from a domain outside its own origin domain
const cors = require('cors');
app.use(cors());

// Initialize Main Project Folder - pointing our app to the folder we want to look at - connect server side code to client side code
app.use(express.static('dist'))

console.log(__dirname)

app.get('/', function (req, res) {
    res.sendFile('dist/index.html');

})

// designates what port the app will listen to for incoming requests
app.listen(8081, function () {
    console.log('Example app listening on port 8081!')
})

// instantiate the API key
const API_KEY = process.env.API_KEY;
//require the Fetch API
const fetch = require('node-fetch');



const callApi = async (url, classification, res) => {
    const response = await fetch (url)
    try {const data = await response.json();
        classification['agreement'] = data.agreement;
    }
    catch(error) {console.log("There was an error", error);}
    console.log(classification);
    res.send(classification);
}



app.post('/api', function (req, res) {
    let classification = {};
    let text = req.body.txt;
    let url = `https://api.meaningcloud.com/sentiment-2.1?key=${API_KEY}&lang=en&txt=${text}&model=general`;
    callApi(url, classification, res);
    });


