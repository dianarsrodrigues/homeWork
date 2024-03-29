const express = require("express");
const https = require("https"); 
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({extended:true}));

app.get("/", function(req, res) {
    res.sendFile(__dirname + "/");
});

app.post("/", function(req, res) {
    const query = req.body.cityName;
    const url = "https://api.openweathermap.org/data/2.5/weather?q=" + query  +"&units=metric&appid=002a442afa27180eeb7a67f39fc1609b";
    
    https.get(url, function(response) {
        console.log(response.statusCode);

        response.on("data", function(data) {
        const weatherData = JSON.parse(data); // transforma os dados 
        const temp = weatherData.main.temp; //vai buscar os dados
        const description = weatherData.weather[0].description;
        const icon = weatherData.weather[0].icon;
        const imageURL = "https://openweathermap.org/img/wn/" + icon + "@2x.png";
        res.write("<h1>The temperature in " + query + " is " + temp + " degrees Celcius.</h1>");
        res.write("<p>The weather is currently " + description + ".</p>");
        res.write("<img src=" + imageURL + ">");
        res.send();
        });
    });
})

app.listen(3000, function() {
    console.log("Server is running on port 3000.");
})