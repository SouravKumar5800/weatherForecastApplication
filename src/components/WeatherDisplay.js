import React from 'react';
import { Card } from './Card';

const WeatherDisplay = ({ weatherData }) => {
    if (!weatherData) {
        return <div>Loading weather...</div>;
    }

    return (
        <main className='main-style'>
            <div className='weather-style'>
                <h1 className="location-name">{weatherData.location}</h1>
                <div className = "climate-card-style">
                    <div className = 'climate-data'>
                        <Card title="Overview" value={weatherData.weatherDescription} logo={weatherData.iconUrl}/>
                        <Card title="Temperature" value={`${weatherData.temperature}°C`} logo={"/logo/hot.png"}/>
                    </div> 
                    <div className = 'climate-data'>
                        <Card title="Wind Speed" value={`${weatherData.windSpeed}Km/H`} logo={"/logo/wind.png"}/>
                        <Card title="Humidity" value={`${weatherData.humidity}%`} logo={"/logo/humidity.png"}/>
                    </div>   
                </div>
            </div>
        </main>
    );
};


export default WeatherDisplay;
