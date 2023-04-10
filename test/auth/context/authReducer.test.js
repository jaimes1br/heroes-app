import { authReducer, types } from "../../../src/auth";

describe('test on authReducer.js', () => {
    
    test('should return default state', () => {
        
        const state = authReducer({ logged: false }, {});
        expect( state ).toEqual({ logged: false });
    });

    test('should set the user when login', () => {
      
        const action = {
            type: types.login,
            payload: {
                name: 'Brandon Jaimes',
                id: 'DFG'
            }
        }

        const state = authReducer({ logged: false }, action);
        expect( state ).toEqual({
            logged: true,
            user: action.payload
        });
    });

    test('should set the logged and delete name when logout', () => {

        const initialState = {
            logged: true,
            user: {
                name: 'Brandon Jaimes',
                id: 'DFG'
            }
        }

        const action = { type: types.logout }

        const state = authReducer( initialState, action);
        expect( state ).toEqual({ logged: false });
    });
});
