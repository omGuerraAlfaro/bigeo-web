import React from 'react';
import mapboxgl from 'mapbox-gl';

mapboxgl.accessToken = 'YOUR_MAPBOX_ACCESS_TOKEN';

class MapComponent extends React.Component {
  constructor(lat, lon) {
    const latitude = {lat};
    const longitude = {lon};
    this.mapContainerRef = React.createRef();
    this.map = null;
  }

  componentDidMount() {
    this.map = new mapboxgl.Map({
      container: this.mapContainerRef.current,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [this.lat.longitude, this.lon.latitude],
      zoom: 12
    });

    new mapboxgl.Marker()
      .setLngLat([this.long.longitude, this.lat.latitude])
      .addTo(this.map);
  }

  componentWillUnmount() {
    if (this.map) {
      this.map.remove();
    }
  }

  render() {
    return <div ref={this.mapContainerRef} style={{ height: '400px' }} />;
  }
}

export default MapComponent;
