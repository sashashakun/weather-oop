import { getHandler } from '../src/main';

describe('#main()', () => {
  let mainToTest;
  let result;

  const services = {
    openweather: jest.fn(() => 'myawesomeweatherstate'),
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
  });
});
