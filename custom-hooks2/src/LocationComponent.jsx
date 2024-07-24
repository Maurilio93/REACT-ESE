import React from "react";
import { useCurrentLocation } from "./useCurrentLocation";

function LocationComponent() {
  const { location, getLocation, loading, error } = useCurrentLocation();

  return (
    <div>
      <h1>Current Location</h1>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      {location.latitude && location.longitude && (
        <p>
          Latitude: {location.latitude}, Longitude: {location.longitude}
        </p>
      )}
      <button onClick={getLocation}>Get Location</button>
    </div>
  );
}

export default LocationComponent;

