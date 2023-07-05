import React, { useEffect, useRef } from 'react';
import mapboxgl from 'mapbox-gl';
import './geolocation.css';

mapboxgl.accessToken = 'pk.eyJ1IjoiY3Jpc3RvYmFsLWdhcnJpZG8iLCJhIjoiY2w5bnBkMmowMDRnYjN1bXd1ZW8yNXZkcCJ9.enFPbRymB4K5HWOIWNxfgA';

function MapComponent({ lon, lat }) {

  const mapContainerRef = useRef(null);
  const mapRef = useRef(null);

  useEffect(() => {
    const lonNum = parseFloat(lon);
    const latNum = parseFloat(lat);

    mapRef.current = new mapboxgl.Map({
      container: mapContainerRef.current,
      style: 'mapbox://styles/mapbox/satellite-v9',
      center: [lonNum, latNum],
      zoom: 16,
    });

    mapRef.current.isStyleLoaded();
    mapRef.current.on('load', () => {
      new mapboxgl.Marker()
        .setLngLat([lonNum, latNum])
        .addTo(mapRef.current);
      mapRef.current.resize(); 
    });

    return () => {
      if (mapRef.current) {
        mapRef.current.remove();
      }
    };

  }, [lon, lat]);

  return <div ref={mapContainerRef} className="map-container" />;
}

export default MapComponent;
