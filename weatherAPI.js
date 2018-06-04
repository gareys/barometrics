var axios = require('axios');

function getWeather(lat, long, dateStart, dateEnd) {
  let dateArray = []
  if (dateEnd) {
    for (let i = dateEnd; i >= dateStart; i -= 86400) {
      dateArray.push(i)
    }
  } else {
    dateArray.push(dateStart)
  }

  return axios.all(
    dateArray.map(
      date => axios.get(`https://api.darksky.net/forecast/${process.env.DARKSKY_API_KEY}/${lat},${long},${date}?exclude=currently,flags`)
    )
  )
  .then(axios.spread((...responses) => {
    let data = []
    responses.map(res => data.push(res.data))
    return data
  }))
  .catch((err) => {
    console.log(err)
  })
}

module.exports = { getWeather };