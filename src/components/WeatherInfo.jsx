function WeatherInfo({ weatherInfo, detail, unit }) {

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
        ? <DetailedWeatherInfo weatherInfo={weatherInfo} unit={unit} /> 
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
