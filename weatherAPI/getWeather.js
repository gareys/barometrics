var axios = require('axios')

function getWeather(lat, long, dateStart, dateEnd) {
  const dates = dateRangeArray(dateStart, dateEnd, 5)

  return axios.all(
    dates.map(
      date => {
        const formattedDate = removeTimezone(date.toISOString())
        const uri = `https://api.darksky.net/forecast/${process.env.DARKSKY_API_KEY}/${lat},${long},${formattedDate}?exclude=currently,flags`
        return axios.get(uri)
      }
    )
  )
  .then(axios.spread((...responses) => {
    let data = []
    responses.map(res => data.push(...res.data.hourly.data))
    return data
  }))
  .catch((err) => {
    console.log(err)
  })
}

function dateRangeArray(dateStart, dateEnd, maxRange) {
  const startDate = new Date(dateStart)
  const endDate = new Date(dateEnd)
  const year = startDate.getFullYear()
  const month = startDate.getMonth()
  let day = startDate.getDate()
  const dates = [startDate]

  while(dates[dates.length - 1] < endDate && dates.length < maxRange) {
    let date = new Date(year, month, ++day)
    dates.push(date)
  }

  return dates
}

function removeTimezone(isoString) {
  return isoString.split('.')[0]
}

exports.getWeatherMiddleware = function(req, res, next) {
  getWeather(req.query.lat, req.query.long, req.query.dateStart, req.query.dateEnd)
    .then(response => {
      if (req.route.path !== '/weather') {
        res.locals.weather = response
        next()
      }
      else {
        res.json(response)
      }
    })
}