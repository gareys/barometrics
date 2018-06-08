const getWeather = require('./getWeather')
const getPressure = require('./getPressure')

exports.getWeatherMiddleware = getWeather.getWeatherMiddleware
exports.getPressureMiddleware = getPressure.getPressureMiddleware