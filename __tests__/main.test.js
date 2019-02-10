import { getHandler } from '../src/main';

describe('#main()', () => {
  let mainToTest;
  let result;
  const requestWeatherDataMock = jest.fn();
  const getWeatherStateMock = jest.fn(() => 'myawesomeweatherstate');

  const services = {
    openweather: {
      requestWeatherData: requestWeatherDataMock,
      getWeatherState: getWeatherStateMock,
    },
  };

  beforeEach(async () => {
    mainToTest = getHandler(services);
    result = await mainToTest('new york', 'openweather');
  });

  afterEach(() => jest.resetAllMocks());

  describe('when correct city and service name passed', () => {
    it('returns weather state', () => {
      expect(result).toBe('myawesomeweatherstate');
    });

    it('calls service#requestWeatherData() and pass city ', () => {
      expect(requestWeatherDataMock).toBeCalledTimes(1);
      expect(requestWeatherDataMock).toBeCalledWith('new york');
    });

    it('calls service#requestWeatherData()', () => {
      expect(getWeatherStateMock).toBeCalledTimes(1);
    });
  });
});
