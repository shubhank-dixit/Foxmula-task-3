import React from "react";
import { useSelector } from "react-redux";
import CitySelector from "./Components/CitySelector";
import SunIconComponent from "./Components/SunIconComponent";
import WeatherViewer from "./Components/WeatherViewer";
import { CityName } from "./redux/weather/WeatherSlice";

function App() {
  const city = useSelector(CityName);

  return (
    <div
      className='d-flex flex-column min-vh-100 p-5'
      style={{ backgroundColor: "orange" }}
    >
      <SunIconComponent align='left' />
      {city ? <WeatherViewer city={city} /> : <CitySelector />}
      <SunIconComponent align='right' />
    </div>
  );
}

export default App;