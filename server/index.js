const express = require("express")
const { auth } = require("express-openid-connect")
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

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use(cors())

app.get(`https://newsapi.org/v2/everything?q=Apple&from=2023-09-19&sortBy=popularity&apiKey=${process.env.NEWS_API_KEY}`)

app.listen(port, () => {
    console.log(`Web server is listening on port ${port}`)
})