import { render, screen } from "@testing-library/react";
import { PublicRoutes } from "../../src/router/PublicRoutes";
import { AuthContext } from "../../src/auth";
import { MemoryRouter, Route, Routes } from "react-router-dom";

describe('test on <PublicRoutes/>', () => {
  
    test('should show children when the user is not authenticated', () => {
      
        const contextValue = {
            logged: false
        }

        render(
            <AuthContext.Provider value={ contextValue }>
                <PublicRoutes>
                    <h1>Ruta Publica</h1>
                </PublicRoutes>
            </AuthContext.Provider>
        )

        expect( screen.getByText('Ruta Publica')).toBeTruthy();
    });

    test('should navigate if user is auth', () => {

        const contextValue = {
            logged: true,
            user: {
                name: 'Brandon',
                id: 'DFG'
            }
        }

        render(
            <AuthContext.Provider value={ contextValue }>
                <MemoryRouter initialEntries={['/login']}>
                    <Routes>
                        <Route path="marvel" element={ <h1>Pagina de Marvel</h1>} />
                        <Route path="login" element={ 
                            <PublicRoutes>
                                <h1>Ruta Publica</h1>
                            </PublicRoutes>
                        } /> 
                    </Routes>
                </MemoryRouter>
            </AuthContext.Provider>
        )

        expect( screen.getByText('Pagina de Marvel')).toBeTruthy();

       
    });
    

    
});
