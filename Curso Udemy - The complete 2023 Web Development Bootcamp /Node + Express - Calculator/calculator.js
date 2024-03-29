const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000

app.use(bodyParser.urlencoded({extended: true}));

app.get('/', (req, res) => {
  res.sendFile(__dirname + "/index.html");
})

app.get('/bmicalculator', (req, res) => {
    res.sendFile(__dirname + "/bmiCalculator.html");
  })

/* __dirname indica o caminho, ou seja, a localização do ficheiro até aqui */

app.post('/', (req, res) => {
    
    var num1 = Number(req.body.num1);
    var num2 = Number(req.body.num2);

    var result = num1 + num2;
    res.send("Result is " + result);
  });

  app.post('/bmicalculator', (req, res) => {
    
    var weight = Number(req.body.weight);
    var height = Number(req.body.height);

    var bmi = weight / (height * height);
    res.send("Your BMI is " + bmi);
  });

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});