export interface WeatherMainInfo {
  temp: number
  feels_like: number
  temp_min: number
  temp_max: number
  pressure: number
  sea_level: number
  grnd_level: number
  humidity: number
  temp_kf: number
}

export interface WeatherListItem {
  dt: number
  main: WeatherMainInfo
  weather: [
    {
      id: number
      main: string
      description: string
      icon: string
    }
  ]
  clouds: {
    all: number
  }
  wind: {
    speed: number
    deg: number
    gust: number
  }
  visibility: number
  pop: number
  rain?: {
    '3h': number
  }
  sys: {
    pod: string
  }
  dt_txt: string
}

export interface City {
  id: number
  name: string
  coord: {
    lon: number
    lat: number
  }
  country: string
  population: number
  timezone: number
  sunrise: number
  sunset: number
}

export interface Weather {
  cod: string
  message: number
  cnt: number
  list: WeatherListItem[]
  city: City
}

export interface SortedWeather {
  [key: string]: WeatherMainInfo
}
