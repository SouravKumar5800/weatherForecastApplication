import React, { useState, useEffect } from 'react';
import "./App.css"
import axios from 'axios';
import Header from './components/Header';
import WeatherDisplay from './components/WeatherDisplay';
import Search from './components/Search';
import Footer from './components/Footer';
import { ToggleButton } from './components/toggleButton';

const App = () => {
    const [weatherData, setWeatherData] = useState(null);
    const [isLightMode, setIsLightMode] = useState(false);

    const fetchWeather = async (location) => {
      try {
          const apiKey = 'e53c46b39cf0d6889c503ec32cf52bca';
          const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=${apiKey}`);
          const data = response.data;
          console.log(data)

          setWeatherData({
              location: data.name,
              temperature: data.main.temp,
              windSpeed: data.wind.speed,
              humidity:data.main.humidity,
              weatherDescription: data.weather[0].description,
              iconUrl: `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`

          });
      } catch (error) {
          console.error('Error fetching weather data:', error);
      }
  };

    useEffect(() => {
        fetchWeather('London'); // Default location
    }, []);

    

    return (
      <>
      <div className = {isLightMode ? "light" : "dark"}>
          <div className={`app-background`}>
              <div style={{zIndex: 2, position: "relative"}}>
                <Header />
                <ToggleButton onChangeState={(state) => setIsLightMode(state)}/>
                <Search onSearch={fetchWeather} />
                <WeatherDisplay weatherData={weatherData} />
              </div>
              <div className="wave"></div>
              <div className="wave"></div>
              <div className="wave"></div>
          </div>
          <Footer />
        </div>
      </>
    );
};

export default App;

