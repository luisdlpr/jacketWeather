function WeatherInfo({ weatherInfo }) {
  return (
    <div>
      {
        (weatherInfo.precipitation)
          ? <div>There could be rain</div>
          : <div>No Precipitation</div>
      }
      <Temperature temperature={weatherInfo.temperature} unit={'Imperial'} />
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
