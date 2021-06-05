import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const WeatherSlice = createSlice({
  name: "weather",
  initialState: {
    loading: true,
    city: "",
    weatherData: {},
  },
  reducers: {
    SET_WEATHER: (state, action) => {
      state.weatherData = action.payload;
      state.loading = false;
    },
    SET_CITY: (state, action) => {
      state.city = action.payload;
    },
  },
});

export const WeatherData = (state) => state.weather.weatherData;
export const Loading = (state) => state.weather.loading;
export const CityName = (state) => state.weather.city;

export const { SET_WEATHER, SET_CITY } = WeatherSlice.actions;

export const FetchWeather = (cityName) => (dispatch) => {
  axios
    .get(
      `http://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=f9bf4e6ed5a11820df58fd2c2584e584&units=metric`
    )
    .then((response) => {
      console.log(response.data.weather);
      dispatch(SET_WEATHER(response.data));
    });
};

export default WeatherSlice.reducer;