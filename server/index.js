const express = require("express")
const { auth } = require("express-openid-connect")
const request = require("request")
const port = process.env.PORT || 4000
const bodyParser = require("body-parser")
const app = express()
const cors = require("cors")

const config = {
    authRequired: false,
    auth0Logout: true,
    secret: process.env.AUTH0_SECRET,
    baseURL: process.env.AUTH0_BASE_URL,
    clientID: process.env.AUTH0_CLIENT_ID,
    issuerBaseURL: process.env.AUTH0_ISSUER_URL
};

// // auth router attaches /login, /logout, and /callback routes to the baseURL
// app.use(auth(config));

// // req.isAuthenticated is provided from the auth router
// app.get('/', (req, res) => {
//     res.send(req.oidc.isAuthenticated() ? 'Logged in' : 'Logged out');
//   });

const options = {
    method: 'POST',
    url: 'https://newsnow.p.rapidapi.com/newsv2',
    headers: {
      'content-type': 'application/json',
      'X-RapidAPI-Key': `${process.env.X_RAPID_API_KEY}`,
      'X-RapidAPI-Host': 'newsnow.p.rapidapi.com'
    },
    body: {
      query: 'AI',
      page: 1,
      time_bounded: true,
      from_date: '23/08/2023',
      to_date: '23/09/2023',
      location: '',
      category: 'Tech Start-ups',
      source: ''
    },
    json: true
  };
  
  request(options, function (error, response, body) {
      if (error) throw new Error(error);
  
      console.log(body);
  });
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use(cors())

app.listen(port, () => {
    console.log(`Web server is listening on port ${port}`)
})