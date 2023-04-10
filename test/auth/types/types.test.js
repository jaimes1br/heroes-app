import { types } from "../../../src/auth";

describe('test on types.js', () => {
  
    test('should return all the types', () => {
        expect(types).toEqual({
            login: '[auth] login',
            logout: '[auth] logout'
        })
    });
    
});
