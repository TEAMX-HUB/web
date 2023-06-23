import{ useEffect, useRef } from 'react';
import { loadModules } from 'esri-loader';

const Map = () => {
  const mapContainerRef = useRef(null);
  const searchInputRef = useRef(null);

  useEffect(() => {
    loadModules(['esri/Map', 'esri/views/MapView'], { css: true }).then(([Map, MapView]) => {
      const map = new Map({
        basemap: 'streets'
      });

      const view = new MapView({
        container: mapContainerRef.current,
        map: map,
        center: [-122.4194, 37.7749],
        zoom: 12
      });

    });
  }, []);

  return (
    <div>
      <div ref={mapContainerRef} style={{ width: '100%', height: '450px' }}></div>
    </div>
  );
};

export default Map