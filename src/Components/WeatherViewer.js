import { Button } from "react-bootstrap";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  FetchWeather,
  Loading,
  SET_CITY,
  WeatherData,
} from "../redux/weather/WeatherSlice";

function WeatherViewer({ city }) {
  //GETTING FROM REDUX
  const dispatch = useDispatch();
  const loading = useSelector(Loading);
  const weatherData = useSelector(WeatherData);

  //FETCHING USING REDUX EVENT
  useEffect(() => {
    dispatch(FetchWeather(city));
  }, [dispatch, city]);

  const handleClick = () => {
    dispatch(SET_CITY(""));
  };

  const Loader = () => {
    return (
      <div className='spinner-border text-white' role='status'>
        <span className='sr-only'>Loading...</span>
      </div>
    );
  };

  const WeatherUI = () => {
    return (
      <div className='p-2 d-flex flex-column align-items-center'>
        {" "}
        <h2 className='text-light'>{weatherData.main.temp} Celcius</h2>
        <h5 className='text-light'>{weatherData.weather[0].main}</h5>
        <p className='text-white-50'>{city}</p>
        <Button variant={"outline-light"} onClick={handleClick}>
          {" "}
          Choose another city{" "}
        </Button>
      </div>
    );
  };

  return (
    <div
      style={{
        height: "300px",
        display: "flex",
        justifyContent: "center",
        paddingTop: "50px",
      }}
    >
      {loading ? <Loader /> : <WeatherUI />}
    </div>
  );
}

export default WeatherViewer;