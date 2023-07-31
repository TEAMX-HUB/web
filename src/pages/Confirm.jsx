import React, { useEffect, useRef, useState } from "react";

const Confirm = () => {
  const mapContainerRef = useRef(null);
  const startMarkerRef = useRef(null);
  const endMarkerRef = useRef(null);
  const [endPoint, setEndPoint] = useState(null);

  useEffect(() => {
    // Load Google Maps API
    const googleMapScript = document.createElement("script");
    googleMapScript.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyDHb0-4rn7bFT4rWKOtxJKe1e-iwpl5lBM&libraries=places`;
    window.document.body.appendChild(googleMapScript);
    googleMapScript.addEventListener("load", initMap);

    return () => {
      googleMapScript.removeEventListener("load", initMap);
    };
  }, []);

  const initMap = () => {
    const directionsRenderer = new window.google.maps.DirectionsRenderer();
    const directionsService = new window.google.maps.DirectionsService();
    const map = new window.google.maps.Map(mapContainerRef.current, {
      zoom: 15,
      center: { lng: -1.565, lat: 6.673 },
      disableDefaultUI: true,
    });

    directionsRenderer.setMap(map);
    directionsRenderer.setPanel(document.getElementById("sidebar"));

    // Get user's current location as start point
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;

          const startPoint = new window.google.maps.LatLng(latitude, longitude);

          // Set the start marker
          startMarkerRef.current = new window.google.maps.Marker({
            position: startPoint,
            map,
            title: "Start Point",
            icon: {
              url: "https://maps.google.com/mapfiles/ms/icons/green-dot.png",
            },
          });

          // Generate random end point coordinates
          const randomEndPoint = {
            latitude: 6.678,
            longitude: -1.568,
          };

          // Set the end point
          setEndPoint(
            new window.google.maps.LatLng(
              randomEndPoint.latitude,
              randomEndPoint.longitude
            )
          );
        },
        (error) => {
          console.error("Error getting user's location:", error.message);
        }
      );
    } else {
      console.error("Geolocation is not supported by this browser.");
    }
  };

  useEffect(() => {
    if (endPoint && startMarkerRef.current) {
      // Add the end marker
      endMarkerRef.current = new window.google.maps.Marker({
        position: endPoint,
        map: startMarkerRef.current.getMap(), // Use the same map as the start marker
        title: "End Point",
        icon: {
          url: "https://maps.google.com/mapfiles/ms/icons/red-dot.png",
        },
      });

      // Calculate and display the route
      calculateAndDisplayRoute(
        new window.google.maps.DirectionsService(),
        startMarkerRef.current.getPosition(),
        endPoint
      );
    }
  }, [endPoint]);

  const calculateAndDisplayRoute = (
    directionsService,
    startPoint,
    endPoint
  ) => {
    directionsService.route(
      {
        origin: startPoint,
        destination: endPoint,
        travelMode: window.google.maps.TravelMode.DRIVING,
      },
      (response, status) => {
        if (status === "OK") {
          // Set the directions path on the map
          new window.google.maps.DirectionsRenderer({
            map: startMarkerRef.current.getMap(),
            directions: response,
          });
        } else {
          console.error("Directions request failed due to " + status);
        }
      }
    );
  };

  return (
    <div>
      <div id="map" style={{ height: "650px" }} ref={mapContainerRef}></div>
      <div id="sidebar"></div>
    </div>
  );
};

export default Confirm;
