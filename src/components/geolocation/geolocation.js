import React from 'react';
import mapboxgl from 'mapbox-gl';
import './geolocation.css';

mapboxgl.accessToken = 'pk.eyJ1IjoiY3Jpc3RvYmFsLWdhcnJpZG8iLCJhIjoiY2w5bnBkMmowMDRnYjN1bXd1ZW8yNXZkcCJ9.enFPbRymB4K5HWOIWNxfgA';

class MapComponent extends React.Component {
  mapContainerRef = React.createRef();

  componentDidMount() {
    const { lon, lat } = this.props;
    
    const lonNum = parseFloat(lon);
    const latNum = parseFloat(lat);

    this.map = new mapboxgl.Map({
      container: this.mapContainerRef.current,
      style: 'mapbox://styles/mapbox/satellite-v9',
      center: [lonNum, latNum],
      zoom: 16,
    });

    this.map.on('load', () => {
      new mapboxgl.Marker() 
        .setLngLat([lonNum, latNum]) 
        .addTo(this.map); 
    });
  }

  componentWillUnmount() {
    if (this.map) {
      this.map.remove();
    }
  }

  render() {
    return <div ref={this.mapContainerRef} className="map-container" />;
  }
}

export default MapComponent;
