import { fireEvent, render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

import { Navbar } from "../../../src/shared";
import { AuthContext } from "../../../src/auth";

const mockUseNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: () => mockUseNavigate
}));

describe('test on <NavBar/>', () => {
  
    const contextValue = { 
        logged: true,
        user: { name: 'Brandon Jaimes', id: "ABC" },
        logout: jest.fn()
    }

    beforeEach(() => jest.clearAllMocks() );

    test('should show user name', () => {

        render(
            <AuthContext.Provider value={ contextValue }>
                <MemoryRouter>
                    <Navbar/>
                </MemoryRouter>
            </AuthContext.Provider>
        )

        expect( screen.getByText('Brandon Jaimes')).toBeTruthy();
      
    });

    test('should call logout and move to login page when click on button logout', () => {

        render(
            <AuthContext.Provider value={ contextValue }>
                <MemoryRouter>
                    <Navbar/>
                </MemoryRouter>
            </AuthContext.Provider>
        )

        const btnLogut = screen.getByRole('button');
        fireEvent.click( btnLogut);

        expect( contextValue.logout ).toHaveBeenCalled();
        expect( mockUseNavigate ).toHaveBeenCalledWith("/login", {"replace": true});  
    });


    
    
});
