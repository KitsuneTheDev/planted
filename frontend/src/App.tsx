import { useEffect, useState } from 'react';
import './App.css';
import Layout from './layout/Layout';
import { WeatherService } from './services/WeatherService';

function App() {
  const [weatherData, setWeatherData] = useState({});

  async function getWeatherData () {
    const weatherService = new WeatherService();
    const weatherServiceData = await weatherService.getWeatherData({ lat: 40, lon: 70 });
    setWeatherData({...weatherServiceData});
  }

  useEffect(() => {
    async function getData() {
      await getWeatherData();
    };

    getData();
  }, []);

  console.log(weatherData);

  return (
    <Layout />
  );
}

export default App
