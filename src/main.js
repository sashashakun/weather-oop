import { MetaWeatherService, OpenWeatherService } from './services';

const services = {
  metaweather: MetaWeatherService,
  openweather: OpenWeatherService,
};

export const getHandler = (services) => async (city = 'moscow', serviceName = 'openweather') => {
  const myAwesomeService = services[serviceName] || services.metaweather;
  await myAwesomeService.requestWeatherData(city);
  return myAwesomeService.getWeatherState();
};

export default getHandler(services);