import React, { useEffect, useState } from 'react'
import axios from 'axios';

function Weather() {

    const [longitude, setLongitude] = useState(0);
    const [latitude, setLatitude] = useState(0);
    const [weather, setWeather] = useState('');
    const [min, setMin] = useState('');
    const [max, setMax] = useState('');
    const [temperature, setTemperature] = useState(0);
    const [city, setCity] = useState('');
    const [icon, setIcon] = useState('');

    const baseUrl = "https://api.openweathermap.org/data/2.5/weather?";
    const APIKey = "e6739ea4c78fbfbbfa5106356ef30fa5";
    const weatherIcon = `http://openweathermap.org/img/wn/${icon}@2x.png`;

    const savePosition = (position) => {
        setLongitude(position.coords.longitude);
        setLatitude(position.coords.latitude);
    }

    const getCurrentCoordinates = async () => {
        try {
            if(navigator.geolocation) {
                window.navigator.geolocation.getCurrentPosition(savePosition)
            }
        } catch (err) {
            console.error(err)
        }
    }

    const getWeatherData = async () => {
        const result = await axios.get(
            `${baseUrl}lat=${latitude}&lon=${longitude}&appid=${APIKey}&units=metric`
        );
        setCity(result.data.name)
        setWeather(result.data.weather[0].main)
        setTemperature(result.data.main.temp)
        setMin(result.data.main.temp_min)
        setMax(result.data.main.temp_max)
        setIcon(result.data.weather[0].icon)
        console.log('Local Weather', result.data);
    }

    useEffect(() => {
        if(longitude && latitude) {
            getWeatherData()
        }
    })

    useEffect(() => {
        getCurrentCoordinates();
    }, [])

    return (
        <div className="m-5 p">
            <div 
            className={(typeof city != "undefined" ) 
            ? ((temperature >= -10 && temperature <= 9)
            ? 'cold' 
            : (temperature >= 10 && temperature <= 29)
            ? 'warm'
            : (temperature >= 30 )
            ? 'hot'
            : 'standard')  
            : 'standard' }>
                <div className="m-5 p-5 ">
                    <h4 className="text-danger">Weather</h4>
                    <img src={weatherIcon} alt="icon"  />
                    <h4 className="text-secondary">{city}</h4>
                    <h1 className="text-danger">{Math.round(temperature)}°C</h1>
                    <small className="text-danger">H:{Math.round(max)}° L:{Math.round(min)}°</small>
                    <h6 className="text-secondary">{weather}</h6>
                </div>
            </div>
        </div>
    )
}

export default Weather
