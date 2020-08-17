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

// Initialize Main Project Folder
app.use(express.static('dist'))

console.log(__dirname)

app.get('/', function (req, res) {
    res.sendFile('dist/index.html')
})

// designates what port the app will listen to for incoming requests
app.listen(8081, function () {
    console.log('Example app listening on port 8081!')
})




app.post('/api', function (req, res) {
    console.log('API has been called');
    const userText = request.body.text;
    return userText;
})


const callApi = async (usertext) => {
        let akey = process.env.API_KEY
        let prosUrl = `https://api.meaningcloud.com/sentiment-2.1?key=${akey}`;
        let progUrl = prosUrl + '&of=json&txt=' + usertext + '.&model=general&lang=en'
        console.log(progUrl);
        const response = await fetch (progUrl)
            try {const data = await response.json(); return data;}
            catch(error) {console.log("There was an error", error);}
        }
    
function clickFunc(e) {
       const adjText = usertext.replace(/ /g, "%20");
       callApi(adjText);
       console.log(apiKey)
        }


