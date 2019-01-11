import { RequestParams } from './request-params.model';

describe('RequestParams', function () {

    let requestParams: RequestParams;

    it('should create a new instance', () => {
        requestParams = new RequestParams();
        expect(requestParams).toBeDefined();
    });

    it('should create query string', () => {
        requestParams = new RequestParams({
            page: 0,
            size: 100
        });

        expect(requestParams.getQueryString()).toEqual('page=0&size=100');
    });

});
