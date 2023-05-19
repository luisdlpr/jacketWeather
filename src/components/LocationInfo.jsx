function LocationInfo({ locationInfo }) {
  return (
    <div>
      {locationInfo.suburb}, {locationInfo.city}
    </div>
  );
}

export default LocationInfo;
