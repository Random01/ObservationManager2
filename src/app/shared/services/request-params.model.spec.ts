import { RequestParams } from './request-params.model';

describe('RequestParams', () => {
  it('should create a new instance', () => {
    const requestParams = new RequestParams();
    expect(requestParams).toBeDefined();
  });

  it('should create query string', () => {
    const requestParams = new RequestParams({
      page: 0,
      size: 100,
    });

    expect(requestParams.getQueryString()).toEqual('page=0&size=100');
  });
});
