import React, { useEffect, useRef, useState } from "react";
import image from "../assets/compax.png";
import menu from "../assets/menu.png";
import profile from ".././assets/profile.png";
import { Link } from "react-router-dom";
const Confirm = () => {
  const mapContainerRef = useRef(null);
  const startMarkerRef = useRef(null);
  const endMarkerRef = useRef(null);
  const [endPoint, setEndPoint] = useState(null);
  const data = JSON.parse(localStorage.mapData ?? null);
  console.log(data);

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
            latitude: data.latitude,
            longitude: data.longitude,
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
      <div className="fixed   bg-white top-0  flex px-3 justify-between  items-center left-0 w-full">
        <div className="w-[57px] h-[57px]">
          {" "}
          <img src={image} alt="" />
        </div>
        <Link to="/profile">
          <div style={{ background: "" }} className="w-[50px]">
            <img src={profile} alt="" />
          </div>
        </Link>
      </div>
      <div className="h-[300px]  rounded-[20px] bg-white space-y-4 p-4 fixed bottom-0  left-0  w-full">
        <p className=" text-[25px] font-semibold">
          {data.name}
          {data.staff_personnel && data.staff_personnel}
        </p>
        <div
          style={{ color: "orange" }}
          className="bg-slate-200 rounded-[20px] p-5 h-[20vh] lg:w-[30%]"
        >
          <p style={{ color: "green" }}>
            {data.office_code && <p>office code: {data.office_code}</p>}
            {data.building_type && <p>{data.building_type}</p>}
            {data.floor_number && <p>floor number: {data.floor_number}</p>}
            {data.room_number && <p>room number: {data.room_number}</p>}
            {data.building_name && <p>building name : {data.building_name}</p>}
          </p>
          {data.n_floors && (
            <p style={{ color: "green" }}> no of floors: {data.n_floors}</p>
          )}
          <p style={{ color: "green" }}>
            {data.n_labs >= 0 && (
              <p>number of available labs : {data.n_labs}</p>
            )}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Confirm;
