import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

import { AuthContext } from "../../src/auth";
import { PrivateRoutes } from "../../src/router/PrivateRoutes";

describe('test on <PrivateRoutes>', () => {

    test('should show children when the user is not authenticated', () => {
      
        Storage.prototype.setItem = jest.fn();

        const contextValue = {
            logged: true,
            user: {
                name: 'Brandon',
                id: 'DFG'
             }
        }

        render(
            <AuthContext.Provider value={ contextValue }>
                <MemoryRouter initialEntries={['/marvel']}>
                    <PrivateRoutes>
                        <h1>Ruta Publica</h1>
                    </PrivateRoutes>
                </MemoryRouter>
            </AuthContext.Provider>
        )

        expect( screen.getByText('Ruta Publica')).toBeTruthy();
        expect( localStorage.setItem ).toHaveBeenCalledWith('lastPath','/marvel');
    });

    
  
});
