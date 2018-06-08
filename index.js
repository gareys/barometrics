require('dotenv').config()
var express = require('express')
var app = express()
var weatherAPI = require('./weatherAPI');

app.get('/weather', weatherAPI.getWeatherMiddleware)
app.get('/pressure', weatherAPI.getWeatherMiddleware, weatherAPI.getPressureMiddleware)

app.listen(3000, () => console.log('Example app listening on port 3000!'))