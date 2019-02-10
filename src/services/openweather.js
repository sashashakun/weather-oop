import axios from 'axios';

const weatherServiceApiUrl = 'https://api.openweathermap.org/data/2.5/weather';
const appId = '09689a67402875abcdc1ee1aa1d061eb';

export class OpenWeatherService {
  constructor(httpClient) {
    this.client = httpClient;
  }

  async requestWeatherData(city = 'moscow') {
    const { data: weatherData } = await axios.get(`${weatherServiceApiUrl}?q=${city}&appid=${appId}`);

    this.data = weatherData;
  }

  getWeatherState() {
    if (this.data) {
      return this.data.weather[0].description;
    }
  }
}

export default new OpenWeatherService(axios);