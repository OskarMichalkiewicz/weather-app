import React from 'react'

const ForecastCard: React.FunctionComponent<any> = (props) => {
  const keys = Object.keys(props)
  return (
    <div style={{ margin: '20px' }}>
      {keys.map((key) => (
        <>
          <h1 style={{ textTransform: 'capitalize' }}>{key}</h1>
          <div>
            {props[key].temp
              ? Math.floor(props[key].temp - 273.15) + '°C'
              : '...'}
          </div>
          <div>
            {props[key].temp
              ? Math.floor(props[key].temp_max - 273.15) + '°C'
              : '...'}
          </div>
          <div>
            {props[key].temp
              ? Math.floor(props[key].temp_min - 273.15) + '°C'
              : '...'}
          </div>
          <div>{props[key].humidity || '...'}</div>
        </>
      ))}
    </div>
  )
}

export default ForecastCard
