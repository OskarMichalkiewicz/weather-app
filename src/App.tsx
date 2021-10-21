import { Container, StyledSpan } from './components/styled/Container.styled'
import React, { useCallback, useEffect, useState } from 'react'
import axios, { AxiosResponse, AxiosError } from 'axios'
import { Weather, SortedWeather } from './helpers/interfaces'
import { sortResponse } from './helpers/helperFunctions'
import ForecastCard from './components/ForecastCard'
import { ThemeProvider } from 'styled-components'
import Global from './components/styled/Global'
import './weather-icons/css/weather-icons.min.css'
import {
  FormContainer,
  StyledInput,
} from './components/styled/TextInput.styled'

const theme = {
  colors: {
    font: '#f3f3f3',
    body: '#fff',
    footer: '#003333',
  },
}

const App = () => {
  const [forecast, setForecast] = useState<SortedWeather[]>()
  const [query, setQuery] = useState('wrocław')
  const [cityDisplay, setCityDisplay] = useState('')
  const [days, setDays] = useState([])
  const [error, setError] = useState<AxiosError>(null)

  const fetchData = useCallback(async (query) => {
    try {
      const response: AxiosResponse<Weather> = await axios.get(
        `https://api.openweathermap.org/data/2.5/forecast?q=${query}&appid=ab926b50b87222f060b9a5ab1292218a`
      )
      const [sorted, days] = sortResponse(response)
      setForecast(sorted)
      setDays(days)
      setCityDisplay(response.data.city.name)
    } catch (e) {
      setError(e)
    }
  }, [])

  const search = async (evt) => {
    if (evt.key === 'Enter') {
      setError(null)
      fetchData(query)
    }
  }

  useEffect(() => {
    fetchData(query)
    setQuery('')
  }, [fetchData])
  if (!forecast) return <p>loading...</p>
  return (
    <ThemeProvider theme={theme}>
      <Global />
      <FormContainer>
        <StyledInput
          name="city"
          type="text"
          placeholder="Provide a city name and press enter to search..."
          onChange={(e) => setQuery(e.target.value)}
          value={query}
          onKeyPress={search}
        />
        <StyledSpan color={'red'}>{error?.message}</StyledSpan>
      </FormContainer>
      <Container style={{ marginBottom: '0', fontSize: '2em' }}>
        <h1>{cityDisplay}</h1>
      </Container>
      <Container style={{}}>
        {days.map((day) => {
          return (
            <StyledSpan
              key={day}
              fontWeight={'bold'}
              hMargin={0}
              fontSize={'2.5em'}
            >
              {day}
            </StyledSpan>
          )
        })}
      </Container>
      <Container>
        {forecast.map((forecast, idx) => (
          <ForecastCard key={`${idx}${days[idx]}`} {...forecast} />
        ))}
      </Container>
    </ThemeProvider>
  )
}

export default App
