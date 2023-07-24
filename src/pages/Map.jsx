import { useEffect, useRef } from 'react';
import { loadModules } from 'esri-loader';

const Map = () => {
  const mapContainerRef = useRef(null);
  const searchInputRef = useRef(null);

  useEffect(() => {
    loadModules(['esri/Map', 'esri/views/MapView', 'esri/Graphic', 'esri/geometry/Point'], { css: true })
      .then(([Map, MapView, Graphic, Point]) => {
        const map = new Map({
          basemap: 'satellite' // Use 'satellite' basemap for satellite imagery
        });

        const view = new MapView({
          container: mapContainerRef.current,
          map: map,
          center: [-1.5650940, 6.6731619],
          zoom: 20
        });

        // Array of point coordinates [x, y]
       // Array of point coordinates [longitude, latitude]
       const pointCoordinates = [
        [-1.5650940, 6.6731619],
        [-1.56493458756694,6.67260009601952],
        [-1.56542,6.672295] ,[-1.56566,6.672247],
        [-1.56438,6.672687],[-1.5644,6.673312],
        // Point 1
        // Add more points here as needed
      ];

        // Create a simple marker symbol for the points
        const markerSymbol = {
          type: 'simple-marker',
          color: [226, 119, 40], // RGB color for the marker (orange in this case)
          size: 12,
          outline: {
            color: [255, 255, 255], // RGB color for the marker outline (white in this case)
            width: 1
          }
        };

        // Loop through the point coordinates array and create and add point graphics
        pointCoordinates.forEach(coord => {
          const pointGeometry = new Point({
            x: coord[0],
            y: coord[1],
            spatialReference: view.spatialReference
          });

          const pointGraphic = new Graphic({
            geometry: pointGeometry,
            symbol: markerSymbol
          });

          view.graphics.add(pointGraphic);
        });
      })
      .catch(error => {
        console.error('Error loading modules:', error);
      });
  }, []);

  return (
    <div>
      <div ref={mapContainerRef} style={{ width: '100%', height: '450px' }}></div>
    </div>
  );
};

export default Map;
