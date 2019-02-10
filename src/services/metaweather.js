import axios from 'axios';

const weatherServiceApiUrl = 'https://www.metaweather.com/api/location';

export class MetaWeatherService {
  constructor(httpClient) {
    this.client = httpClient;
  }

  async requestWeatherData(city = 'moscow') {
    const { data: locationData } = await axios.get(`${weatherServiceApiUrl}/search/?query=${city}`);

    if (locationData[0].woeid) {
      const { data: weatherData } = await axios.get(`${weatherServiceApiUrl}/${locationData[0].woeid}/`);
 
      this.data = weatherData.consolidated_weather[0];
    }
  }

  getWeatherState() {
    if (this.data) {
      return this.data.weather_state_name;
    }
  }
}

export default new MetaWeatherService(axios);