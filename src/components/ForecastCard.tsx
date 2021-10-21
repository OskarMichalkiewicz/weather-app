import React from 'react'
import { Card, CardSection } from './styled/Card.styled'
import { Flex, StyledSpan } from './styled/Container.styled'

const ForecastCard: React.FunctionComponent<any> = (props) => {
  const keys = Object.keys(props)
  const temps = keys
    .map((key) => props[key].temp)
    .filter((item) => typeof item === 'number')
    .map((temp) => temp - 273.15)
  const mean = temps.reduce((acc, temp) => (acc += temp)) / temps.length
  const max = Math.max(...temps)
  const min = Math.min(...temps)
  const mode = Object.values(
    temps.reduce((count, e) => {
      if (!(e in count)) {
        count[e] = [0, e]
      }
      count[e][0]++
      return count
    }, {})
  ).reduce((a, v) => (v[0] < a[0] ? a : v), [0, null])[1]
  const icons = {
    morning: 'wi-day-haze',
    day: 'wi-day-sunny',
    night: 'wi-night-clear',
  }
  return (
    <Card>
      <hr color={'#fff'} />
      {keys.map((key, idx) => (
        <CardSection key={`${key}${idx}`}>
          <StyledSpan fontSize={'4em'}>
            <i className={`wi ${icons[key]}`} />
          </StyledSpan>
          <StyledSpan vMargin={5} hMargin={1} fontSize={'2em'}>
            {props[key].temp ? Math.floor(props[key].temp - 273.15) : '...'}
            {props[key].temp && <i className="wi wi-celsius" />}
          </StyledSpan>
          <div>
            {props[key].humidity && <i className="wi wi-raindrop" />}{' '}
            {props[key].humidity ? (+props[key].humidity).toFixed(2) : '...'}
          </div>
        </CardSection>
      ))}
      <hr color={'#fff'} />
      <CardSection>
        <Flex>
          <StyledSpan fontSize={'.7em'}>min</StyledSpan>
          <StyledSpan fontSize={'.7em'}>max</StyledSpan>
        </Flex>
        <Flex>
          <StyledSpan>
            {Math.floor(min)}
            <i className="wi wi-celsius" />
          </StyledSpan>
          <StyledSpan>
            {Math.floor(max)}
            <i className="wi wi-celsius" />
          </StyledSpan>
        </Flex>
        <Flex>
          <StyledSpan fontSize={'.7em'}>mean</StyledSpan>
          <StyledSpan fontSize={'.7em'}>mode</StyledSpan>
        </Flex>
        <Flex>
          <StyledSpan>
            {Math.floor(mean)}
            <i className="wi wi-celsius" />
          </StyledSpan>
          <StyledSpan>
            {Math.floor(mode)}
            <i className="wi wi-celsius" />
          </StyledSpan>
        </Flex>
      </CardSection>
    </Card>
  )
}

export default ForecastCard
