function getPressure(weatherData) {
    const pressureData = []
    weatherData.map(data => {
      pressureData.push({
        time: data.time,
        pressure: data.pressure
      })
    })
    return pressureData
}

exports.getPressureMiddleware = function(req, res) {
  res.json(getPressure(res.locals.weather))
}