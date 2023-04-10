import { render, screen } from "@testing-library/react";
import { AuthContext } from "../../src/auth";
import { MemoryRouter } from "react-router-dom";
import { AppRouter } from "../../src/router/AppRouter";

describe('test on <AppRouter/>', () => {
  

    test('should show login when user is not auth', () => {
        

        const contextValue = { logged: false }
        
        render(
            <MemoryRouter initialEntries={['/marvel']}>
                <AuthContext.Provider value={ contextValue }>
                    <AppRouter/>
                </AuthContext.Provider>
            </MemoryRouter>

        )

        expect( screen.getAllByText('Login').length).toBe(2);
    
    });
    
    test('should  marvel screen when user is auth', () => {
      
        const contextValue = { logged: true, user: { name: 'Brandon', id:'ADC'} }
        
        render(
            <MemoryRouter initialEntries={['/marvel']}>
                <AuthContext.Provider value={ contextValue }>
                    <AppRouter/>
                </AuthContext.Provider>
            </MemoryRouter>

        )
        expect( screen.getAllByText('Marvel Page').length).toBe(1)
    });
    
});
