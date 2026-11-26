import { RequestParams } from './request-params.model';
import { ObservationSearchParams } from '../../observations/shared/observation-search-params.model';

describe('RequestParams', () => {
  it('omits unspecified parameters', () => {
    expect(new RequestParams().getQueryString()).toBe('');
  });

  it('should create query string', () => {
    const requestParams = new RequestParams({
      page: 0,
      size: 100,
    });

    expect(requestParams.getQueryString()).toEqual('page=0&size=100');
  });

  it('combines observation filters with paging', () => {
    const requestParams = new ObservationSearchParams({ page: 0, session: 'session-1', target: 'target-1' });
    expect(requestParams.getQueryString()).toBe('page=0&session=session-1&target=target-1');
  });
});
