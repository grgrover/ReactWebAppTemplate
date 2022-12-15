const express = require('express')
const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, '../.env') });
const app = express()
const db = require('../database/index.js')
var cors = require('cors');

app.use(cors())
app.use(express.json());

app.get('/', (req, res) => {
})

app.post('/', (req, res) => {
  console.log(req.body)
  res.sendStatus(201)

})


app.listen(process.env.PORT, () => {
  console.log(`Basic web application listening on port ${process.env.PORT}`)
})