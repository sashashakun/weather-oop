import axios from 'axios';

const weatherServiceApiUrl = 'https://api.openweathermap.org/data/2.5/weather';
const appId = '09689a67402875abcdc1ee1aa1d061eb';

const createService = (httpClient) => async (city = 'moscow') => {
  const { data: weatherData } = await httpClient.get(`${weatherServiceApiUrl}?q=${city}&appid=${appId}`);

  return weatherData.weather[0].description;
}

export default createService(axios);