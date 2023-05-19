import React from 'react';

function WeatherInfo({ weatherInfo, detail }) {
  const [toggleUnit, setToggleUnit] = React.useState('Metric');

  const switchUnits = () => {
    setToggleUnit((prev) => {
      if (prev === 'Metric') {
        return 'Imperial'
      } else {
        return 'Metric'
      }
    });
  }


  const weatherStatement = () => {
    let keyWords = [];

    if (weatherInfo.temperature.Metric.Value <= 10) {
      keyWords.push('warm')
    } else if (weatherInfo.temperature.Metric.Value < 20) {
      keyWords.push('light')
    }

    if (weatherInfo.precipitation) {
      keyWords.push('rain')
    }

    if (keyWords.length === 0) {
      return 'No need for a jacket'
    } else {
      return 'Wear a ' + keyWords.join(' ') + ' jacket'
    }
  }

  return (
    <div>
      {weatherStatement()}
      {
        (detail) 
        ? <div>
            <DetailedWeatherInfo weatherInfo={weatherInfo} unit={toggleUnit} /> 
            <button onClick={switchUnits}>change units</button>
          </div>
        : <></>
      }
      
    </div>
  );
}

function DetailedWeatherInfo({ weatherInfo, unit }) {
  return (
    <div>
      {
        (weatherInfo.precipitation)
          ? <div>Precipitation</div>
          : <div>No Precipitation</div>
      }
      {weatherInfo.description}  
      <Temperature temperature={weatherInfo.temperature} unit={unit} />
    </div>
  );
}

function Temperature({ temperature, unit }) {
  return (
    <div>
      {
        (unit === 'Imperial') ?
          <div> {temperature.Imperial.Value} F </div> :
          <div> {temperature.Metric.Value} C </div>
      }
    </div>
  );
}

export default WeatherInfo;
