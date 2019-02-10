import axios from 'axios';

const weatherServiceApiUrl = 'https://www.metaweather.com/api/location';

const createService = (httpClient) => async (city = 'moscow') => {
  const { data: locationData } = await httpClient.get(`${weatherServiceApiUrl}/search/?query=${city}`);

    if (locationData[0].woeid) {
      const { data: weatherData } = await httpClient.get(`${weatherServiceApiUrl}/${locationData[0].woeid}/`);
 
      return weatherData.consolidated_weather[0].weather_state_name;
    }
}

export default createService(axios);