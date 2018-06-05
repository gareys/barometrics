# Barometrics

A Node API for weather that takes a location and a date(range) and responds with observed (historical) and/or forecast (future) data. Built for use with [Pressure](https://github.com/gareys/pressure), an app for tracking barometric pressure variance and its correlation with pain.

#### Docs

Endpoints

1. `/weather`
-- `lat`* Latitude
-- `long`* Longitude
-- `dateStart`* start date of date range Unix Epoch time in seconds (when used without dateEnd, only dateStart is queried)
-- `dateEnd` end date of date range in Unix Epoch time in seconds

\* *denotes required parameter*

#### Example Usage

Example Request

`http://localhost:3000/weather?lat=33.9526&long=-84.5499&dateStart=1526515200&dateEnd=1526601600`

Example Response

```
[
  {
    "latitude": 33.9526,
    "longitude": -84.5499,
    "timezone": "America/New_York",
    "hourly": {
      "summary": "Rain starting in the evening, continuing until night.",
      "icon": "rain",
      "data": [
        {
          "time": 1526529600,
          "summary": "Clear",
          "icon": "clear-night",
          "precipIntensity": 0,
          "precipProbability": 0,
          "temperature": 70.11,
          "apparentTemperature": 71.13,
          "dewPoint": 67.62,
          "humidity": 0.92,
          "pressure": 1001.69,
          "windSpeed": 2.61,
          "windBearing": 98,
          "cloudCover": 0.06,
          "visibility": 9.74
        },
        ...
      ]
    },
    "daily": {
      "data": [
        {
          "time": 1526529600,
          "summary": "Rain starting in the evening.",
          "icon": "rain",
          "sunriseTime": 1526553404,
          "sunsetTime": 1526603721,
          "moonPhase": 0.08,
          "precipIntensity": 0.0074,
          "precipIntensityMax": 0.0633,
          "precipIntensityMaxTime": 1526601600,
          "precipProbability": 0.78,
          "precipType": "rain",
          "temperatureHigh": 77.56,
          "temperatureHighTime": 1526590800,
          "temperatureLow": 66.37,
          "temperatureLowTime": 1526634000,
          "apparentTemperatureHigh": 78.44,
          "apparentTemperatureHighTime": 1526590800,
          "apparentTemperatureLow": 67.35,
          "apparentTemperatureLowTime": 1526634000,
          "dewPoint": 67.63,
          "humidity": 0.87,
          "pressure": 1004.72,
          "windSpeed": 1.37,
          "windBearing": 95,
          "cloudCover": 0.27,
          "visibility": 9,
          "temperatureMin": 68.08,
          "temperatureMinTime": 1526551200,
          "temperatureMax": 77.56,
          "temperatureMaxTime": 1526590800,
          "apparentTemperatureMin": 69.1,
          "apparentTemperatureMinTime": 1526551200,
          "apparentTemperatureMax": 78.44,
          "apparentTemperatureMaxTime": 1526590800
        }
      ]
    },
    "offset": -4
  },
  ...
]
```

#### Setup

`yarn install` or `npm install`

`yarn start` or `npm start`

#### Credits

[Powered by Dark Sky](https://darksky.net/poweredby/)