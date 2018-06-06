# Barometrics

A Node API for weather that takes a location and a date(range) and responds with observed (historical) and/or forecast (future) data. Built for use with [Pressure](https://github.com/gareys/pressure), an app for tracking barometric pressure variance and its correlation with pain.

### Docs

#### // Endpoints

#### `/weather`
**Description:** Returns an array of hourly weather data for the given time period at the specified location
**Parameters:**
- `lat`* Latitude
- `long`* Longitude
- `dateStart`* start date of date range (in any acceptable date format) (when used without dateEnd, only dateStart is queried)
- `dateEnd` end date of date range (in any acceptable date format). Total date range can be no more than 5 days. Requests for more than 5 days will be cut at 4 days from dateStart.

#### `/pressure`
**Description:** Returns an array of hourly atmospheric pressure data (in millibars) for the given time period at the specified location
**Parameters:**
- `lat`* Latitude
- `long`* Longitude
- `dateStart`* start date of date range (in any acceptable date format) (when used without dateEnd, only dateStart is queried)
- `dateEnd` end date of date range (in any acceptable date format). Total date range can be no more than 5 days. Requests for more than 5 days will be cut at 4 days from dateStart.

\* *denotes required parameter*

### Example Usage

Where hourly data is available, you can expect to receive 24 hourly items per date, so a request for the max of 5 days of data would return an array with 120 items.

**Example Request to `/weather`**

`http://localhost:3000/weather?lat=33.9526&long=-84.5499&dateStart=05-30-2018&dateEnd=06-02-2018`

**Example Response from `/weather`**

```
[
  {
    "time": 1527652800,
    "summary": "Mostly Cloudy",
    "icon": "partly-cloudy-night",
    "precipIntensity": 0.0048,
    "precipProbability": 0.09,
    "precipType": "rain",
    "temperature": 73.67,
    "apparentTemperature": 75.11,
    "dewPoint": 71.51,
    "humidity": 0.93,
    "pressure": 1010.55,
    "windSpeed": 5.3,
    "windGust": 9.09,
    "windBearing": 170,
    "cloudCover": 0.88,
    "uvIndex": 0,
    "visibility": 4.15,
    "ozone": 320.1
  },
  ...
]
```

**Example Request to `/pressure`**

`http://localhost:3000/weather?lat=33.9526&long=-84.5499&dateStart=05-30-2018&dateEnd=06-02-2018`

**Example Response from `/pressure`**

```
[
  {
    "time": 1527652800,
    "pressure": 1010.55
  },
  {
    "time": 1527656400,
    "pressure": 1010.82
  },
  ...
]
```

### Setup

`yarn install` or `npm install`

`yarn start` or `npm start`

### Credits

[Powered by Dark Sky](https://darksky.net/poweredby/)