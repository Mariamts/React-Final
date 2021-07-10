import { login } from './auth';

const traceMock = jest.fn();
const errorMock = jest.fn();

global.console.trace = traceMock;
global.console.error = errorMock;

describe('auth.js testing', () => {
  test('login request rejection', async () => {
    const rejection = new Error('Rejected');
    global.fetch = jest.fn().mockRejectedValue(rejection);
    await login();

    expect(traceMock).toBeCalledWith(rejection);
    expect(errorMock).toBeCalledWith('[login] error');
  });

  test('login request resolve', async () => {
    const response = {
      token: 'mocked-token',
    };
    global.fetch = jest.fn(() => {
      return Promise.resolve({
        json: jest.fn().mockResolvedValue(response),
      });
    });
    const token = await login();
    expect(token).toStrictEqual(response);
  });
});
