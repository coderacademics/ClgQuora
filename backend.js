const express = require('express');
const app = express()
const router=require('./routes/auth')
const port = 3001;


app.use(express.json())
app.use(router)




app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})