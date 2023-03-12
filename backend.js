const express = require('express');
const connectToMongoDB =require('./db');
const app = express()
const port = 3001;
connectToMongoDB();
app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})