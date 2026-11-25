import { JwtService } from './jwt.service';

describe('JwtService', () => {
  it('stores, reads and removes the token using the same local storage key', () => {
    const setItem = spyOn(Storage.prototype, 'setItem');
    const getItem = spyOn(Storage.prototype, 'getItem').and.returnValue('test-token');
    const removeItem = spyOn(Storage.prototype, 'removeItem');
    const service = new JwtService();

    service.setToken('test-token');
    expect(setItem).toHaveBeenCalledWith('jwtToken', 'test-token');
    expect(service.getToken()).toBe('test-token');
    expect(getItem).toHaveBeenCalledWith('jwtToken');
    service.removeToken();
    expect(removeItem).toHaveBeenCalledWith('jwtToken');
  });
});
