import { useEffect } from 'react';
import { getWeatherData } from './redux/slices/weatherServiceSlice';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import Layout from './layout/Layout';

function App() {
  const { weatherServiceData, weatherServiceDataLoading, weatherServiceDataError } = useSelector((state) => state.weatherServiceReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getWeatherData({lat: 50, lon: 40}));
  }, [dispatch]);

  return (
    weatherServiceDataLoading ? <div><h1>Loading</h1></div> : <Layout />
  );
}

export default App
