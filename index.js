require('dotenv').config()
var express = require('express')
var app = express()
var weatherAPI = require('./weatherAPI');

app.get('/weather', function (req, res) {
  weatherAPI.getWeather(req.query.lat, req.query.long, req.query.dateStart, req.query.dateEnd)
    .then( response =>
      res.send(response)
  )
})

app.get('/pressure', function(req, res) {
  weatherAPI.getPressure(req.query.lat, req.query.long, req.query.dateStart, req.query.dateEnd)
    .then( response =>
      res.send(response)
  )
})

app.listen(3000, () => console.log('Example app listening on port 3000!'))