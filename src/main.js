import { MetaWeatherService, OpenWeatherService } from './services';

const services = {
  metaweather: MetaWeatherService,
  openweather: OpenWeatherService,
};

export const getHandler = (services) => async (city = 'moscow', serviceName = 'openweather') => {
  const myAwesomeService = services[serviceName] || services.metaweather;
  const weather = await myAwesomeService(city);
  return weather;
};

export default getHandler(services);