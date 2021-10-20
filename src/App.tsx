import './styles.css'
import { Container } from './components/styled/Container.styled'
import React, { useCallback, useEffect, useState } from 'react'
import axios, { AxiosResponse } from 'axios'
import { Weather, SortedWeather } from './helpers/interfaces'
import { sortResponse } from './helpers/helperFunctions'
import ForecastCard from './components/ForecastCard'

// 1. The page should show 5-day weather forecast for given city including:
// a. Morning temperature
// b. Day temperature
// c. Night temperature
// d. Humidity
// 2. The page should also show following stats relevant to weather forecast:
// a. Minimum value
// b. Maximum value
// c. Mean value
// d. Mode value

const App = () => {
  const [forecast, setForecast] = useState<SortedWeather[]>()
  const [town] = useState('Wrocław')

  const fetchData = useCallback(async () => {
    const response: AxiosResponse<Weather> = await axios.get(
      `https://api.openweathermap.org/data/2.5/forecast?q=${town}&appid=ab926b50b87222f060b9a5ab1292218a`
    )
    console.log(sortResponse(response))
    setForecast(sortResponse(response))
  }, [town])

  useEffect(() => {
    fetchData()
  }, [fetchData])
  if (!forecast) return <p>loading...</p>
  return (
    <Container>
      {forecast.map((forecast, idx) => (
        <ForecastCard key={idx} {...forecast} />
      ))}
    </Container>
  )
}

export default App
