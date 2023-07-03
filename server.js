// bring in node modules
require('dotenv').config()
const express = require('express')
const app = express()
var bodyParser = require('body-parser')
const cors = require('cors')
// identify port number
const port = 8080

// express use() function to add third-party middleware
app.use(cors())
app.use(bodyParser.json())

// ENDPOINT WILL GO HERE
app.post("/secret-code", async (req, res) => {
    if (req.body.code._value === process.env.ADMIN_CODE) {
      res.status(200).json("Correct code");
    } else {
      res.status(200).json("Incorrect code");
    }
  });

// Connect host to port
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
