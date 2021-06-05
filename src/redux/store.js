import { configureStore } from "@reduxjs/toolkit";
import WeatherReducer from "./weather/WeatherSlice";

export default configureStore({
  reducer: {
    weather: WeatherReducer,
  },
});
