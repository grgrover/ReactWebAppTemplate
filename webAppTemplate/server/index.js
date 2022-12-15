const express = require('express')
const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, '../.env') });
const app = express()
//const db = require('../database/index.js')
var cors = require('cors');

app.use(cors())
app.use(express.json());

app.get('/', (req, res) => {
})

app.post('/', (req, res) => {
  console.log(req.body)
  res.sendStatus(201)

})

const port = process.env.PORT || 3000
app.listen(port, () => {
  console.log(`Basic web application listening on port ${port}`)
})