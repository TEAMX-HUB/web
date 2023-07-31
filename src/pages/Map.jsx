import { useEffect, useRef, useState } from "react";
import { loadModules } from "esri-loader";
import { useGetBuildingsMutation } from "../redux/slices/compaxApiSlice";
import Button from "../components/reusables/Button";
import { useSearchDataMutation } from "../redux/slices/compaxApiSlice";
import { setMapData } from "../redux/slices/authSlice";
import { useDispatch } from "react-redux";
import { clearMapData } from "../redux/slices/authSlice";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";
const btn = {
  width: "150px",
};
const Map = () => {
  const mapContainerRef = useRef(null);
  const [getBuildings] = useGetBuildingsMutation();
  const [search] = useSearchDataMutation();
  const [buildingsData, setBuildingsData] = useState([]);
  const [selectedType, setSelectedType] = useState("buildings");
  const [searchInput, setSearchInput] = useState("");
  const dispatch = useDispatch();

  const navigate = useNavigate();
  console.log(buildingsData);
  useEffect(() => {
    const fetchData = async () => {
      try {
        let res;
        if (searchInput && selectedType !== "all") {
          // If there is a search input and the selected type is not "all",
          // fetch data based on the search input and selected type
          res = await search({ type: selectedType, search: searchInput });
        } else {
          // Otherwise, fetch all data for all categories
          res = await getBuildings({ type: selectedType });
        }

        setBuildingsData(res.data);
        console.log(res);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [selectedType, searchInput]);
  useEffect(() => {
    loadModules(
      [
        "esri/Map",
        "esri/views/MapView",
        "esri/Graphic",
        "esri/geometry/Point",
        "esri/PopupTemplate",
      ],
      { css: true }
    )
      .then(([Map, MapView, Graphic, Point, PopupTemplate]) => {
        const map = new Map({
          basemap: "satellite",
        });

        const view = new MapView({
          container: mapContainerRef.current,
          map: map,
          center: [-1.565094, 6.6731619],
          zoom: 20,
        });

        const markerSymbol = {
          type: "simple-marker",
          color: [226, 119, 40],
          size: 12,
          outline: {
            color: [255, 255, 255],
            width: 1,
          },
        };

        // Clear previous graphics when buildingsData changes
        view.graphics.removeAll();

        buildingsData.forEach((building) => {
          const latitude = building.latitude;
          const longitude = building.longitude;

          const pointGeometry = new Point({
            x: longitude,
            y: latitude,
            spatialReference: view.spatialReference,
          });

          const pointGraphic = new Graphic({
            geometry: pointGeometry,
            symbol: markerSymbol,
            attributes: building,
          });
          const handleButtonClick = () => {
            // Function logic to execute when the button is clicked
            console.log("Button clicked!");
          };

          const popupTemplate = new PopupTemplate({
            title: "{name}",
            content: `<div><img src="{ImageUrl}" alt="{BuildingName}" height="100px" width="100px"></div>
            <div>Type of building: {building_type}
              <p>classroom no: {n_classrooms}</p>
            </div>
            <div>
            <button class="popup-button">Click Me</button>
      </div>`,
          });

          view.on("click", (event) => {
            // Check if the clicked graphic is a popup
            if (event?.graphic?.popupTemplate?.title === "{name}") {
              handleButtonClick();
            }
          });

          view.on("click", (event) => {
            // Get the clicked graphics from the event
            view.hitTest(event).then((response) => {
              const graphic = response.results[0].graphic;
              if (graphic && graphic.attributes) {
                // Stringify the building data before dispatching to the Redux store
                const stringifiedBuildingData = JSON.stringify(
                  graphic.attributes
                );
                dispatch(setMapData(stringifiedBuildingData));
              }
            });
          });
          const closeButtonNode = view.popup.container.querySelector(
            ".esri-popup__button.esri-popup__button--close"
          );
          if (closeButtonNode) {
            closeButtonNode.addEventListener("click", () => {
              dispatch(clearMapData());
            });
          }
          pointGraphic.popupTemplate = popupTemplate;

          view.graphics.add(pointGraphic);
        });
      })
      .catch((error) => {
        console.error("Error loading modules:", error);
      });
  }, [buildingsData]);

  const handleTypeChange = (type) => {
    setSelectedType(type);
  };
  const [searchContainer, setSearchContainer] = useState(false);
  const handleSearchChange = (e) => {
    setSearchInput(e.target.value);
    e.target.value.length > 0
      ? setSearchContainer(true)
      : setSearchContainer(false);
  };

  return (
    <div>
      <div style={{ display: "flex", alignItems: "center" }}>
        <div className="">
          <input
            type="text"
            value={searchInput}
            onChange={handleSearchChange}
            placeholder="Search..."
            style={{ flex: 1, padding: "8px" }}
          />
          {searchContainer && (
            <div className="">
              {buildingsData &&
                buildingsData?.map((item, index) => (
                  <p
                    className="  cursor-pointer"
                    onClick={() => {
                      navigate("/confirm");
                      dispatch(setMapData(JSON.stringify(item)));
                    }}
                    key={index}
                  >
                    {item.name}
                  </p>
                ))}
            </div>
          )}
        </div>

        <Button style={btn} onClick={() => handleTypeChange("buildings")}>
          Buildings
        </Button>
        <Button style={btn} onClick={() => handleTypeChange("classrooms")}>
          Classrooms
        </Button>
        <Button style={btn} onClick={() => handleTypeChange("offices")}>
          Offices
        </Button>
      </div>
      <div
        ref={mapContainerRef}
        style={{ width: "100%", height: "650px", marginTop: "10px" }}
      ></div>
    </div>
  );
};

export default Map;

/*import { useEffect, useRef, useState } from "react";
import { loadModules } from "esri-loader";

const Map = () => {
  // ... Other state and useEffects ...

  const handleSearchChange = (e) => {
    setSearchInput(e.target.value);
  };

  const handleSearch = async () => {
    try {
      const response = await fetch(`/api/search?type=${selectedType}&search=${searchInput}`);
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();
      setBuildingsData(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <div>
      <div style={{ display: "flex", alignItems: "center" }}>
        <input
          type="text"
          value={searchInput}
          onChange={handleSearchChange}
          placeholder="Search..."
          style={{ flex: 1, padding: "8px" }}
        />
        <button onClick={() => handleTypeChange("all")}>All Categories</button>
        <button onClick={() => handleTypeChange("buildings")}>Buildings</button>
        <button onClick={() => handleTypeChange("classrooms")}>Classrooms</button>
        <button onClick={() => handleTypeChange("offices")}>Offices</button>
        <button onClick={handleSearch}>Search</button>
      </div>
      <div
        ref={mapContainerRef}
        style={{ width: "100%", height: "650px", marginTop: "10px" }}
      ></div>
    </div>
  );
};

export default Map;
 */
