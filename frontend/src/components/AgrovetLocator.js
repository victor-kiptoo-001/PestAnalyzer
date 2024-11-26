import React, { useEffect } from "react";

const AgrovetLocator = ({ location }) => {
  useEffect(() => {
    if (location) {
      const map = new window.google.maps.Map(document.getElementById("map"), {
        center: { lat: location.lat, lng: location.lng },
        zoom: 12,
      });

      new window.google.maps.Marker({
        position: location,
        map,
        title: "Your Location",
      });
    }
  }, [location]);

  return <div id="map" style={{ width: "100%", height: "400px" }}></div>;
};

export default AgrovetLocator;
