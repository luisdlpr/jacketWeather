import './App.css';
import React from 'react';
import WeatherInfo from './components/WeatherInfo';
import LocationInfo from './components/LocationInfo';

const API_KEY = 'QIF3hYO4FwSOVpOvsgyAzfXd2002jGgU';
const BASE_URL = "http://dataservice.accuweather.com"
const URL_LOCATION = BASE_URL + "/locations/v1/cities/geoposition/search?";

function App() {
  const [accessCoords, setCoords] = React.useState(
    { lat: null, lng: null }
  );
  const [weatherDetails, updateWeatherDetails] = React.useState(
    {
      precipitation: null,
      temperature: null,
      description: null
    }
  )
  const [locationDetails, setLocationDetails] = React.useState();
  const [toggleDetails, setToggleDetails] = React.useState(false);

  React.useEffect(() => {
    if (accessCoords.lat == null && accessCoords.lng == null) {
      return;
    }

    fetch(URL_LOCATION + new URLSearchParams({
      apikey: API_KEY,
      q: accessCoords.lat.toString() + ',' + accessCoords.lng.toString()
    }))
      .then(response => response.json())
      .then(result => {
        setLocationDetails({
          key: result.Key,
          suburb: result.LocalizedName,
          city: result.ParentCity.LocalizedName
        });
      });
  }, [accessCoords])

  React.useEffect(() => {
    if (locationDetails != null && locationDetails.key != null) {
      getWeather(locationDetails.key);
    }
  }, [locationDetails]);

  const getWeather = key => {
    fetch(`${BASE_URL}/currentconditions/v1/${key}?` + new URLSearchParams({
      apikey: API_KEY
    }))
      .then(response => response.json())
      .then(result => {
        console.log(result[0])
        updateWeatherDetails(
          {
            precipitation: result[0].HasPrecipitation,
            temperature: result[0].Temperature,
            description: result[0].WeatherText
          }
        )
      });
  };

  const getLocation = async e => {
    e.target.disabled = true;
    navigator.geolocation.getCurrentPosition(position => {
      setCoords({
        lat: position.coords.latitude,
        lng: position.coords.longitude
      });
    }, err => {
      e.target.disabled = false;
      alert('Something went wrong grabbing your location, please check your\
 settings and try again!');
      console.log(err);
    });
  };

  const switchDetail = () => {
    setToggleDetails(prev => !prev);
  }

  return (
    <div className="App">
      <header className="App-header">
        {(locationDetails == null)
          ? <div>Click to load weather for current location</div>
          : <LocationInfo locationInfo={locationDetails} />}
        {(weatherDetails.precipitation == null)
          ? <div></div>
          : <div>
            <WeatherInfo weatherInfo={weatherDetails} detail={toggleDetails} />
            <button onClick={switchDetail}>show more</button>
          </div>
        }
        <button onClick={getLocation}>click</button>
      </header>
    </div>
  );
}

export default App;
