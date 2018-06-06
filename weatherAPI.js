var axios = require('axios');

function getWeather(lat, long, dateStart, dateEnd) {
  const startDate = new Date(dateStart)
  const endDate = new Date(dateEnd)
  const year = startDate.getFullYear()
  const month = startDate.getMonth()
  let day = startDate.getDate()
  const dates = [startDate]

  while(dates[dates.length - 1] < endDate && dates.length < 5) {
    let date = new Date(year, month, ++day)
    dates.push(date)
  }

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

function getPressure(lat, long, dateStart, dateEnd) {
  return getWeather(lat, long, dateStart, dateEnd).then(response => {
    const pressureData = []
    response.map(data => {
      pressureData.push({
        time: data.time,
        pressure: data.pressure
      })
    })
    return pressureData
  })
}

function removeTimezone(isoString) {
  return isoString.split('.')[0]
}

module.exports = {
  getPressure,
  getWeather
};