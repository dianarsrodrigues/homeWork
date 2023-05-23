const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!');
})

app.get('/contact', (req, res) => {
    res.send('Contact me at:diana');
  })

app.get('/about', (req, res) => {
    res.send("I'm Diana, I want to be a proggramer");
  })

app.get('/hobbies', (req, res) => {
    res.send("i like coffee");
  })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

/* comand to start server with nodemon is ~ nodemon server.js */