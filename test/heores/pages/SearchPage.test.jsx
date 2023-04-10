import { fireEvent, render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { SearchPage } from "../../../src/heores";

const mockUseNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: () => mockUseNavigate
}));


describe('test on <SearchPage/>', () => {
  
    beforeEach(() => jest.clearAllMocks() );

    test('should render with default values', () => {
        const { container } = render (
            <MemoryRouter>
                <SearchPage/>                
            </MemoryRouter>
        );

        expect( container ).toMatchSnapshot();
    });

    test('should render spiderman witg the value in queryString', () => {
        
        render (
            <MemoryRouter initialEntries={['/search?q=spider%20man']}>
                <SearchPage/>                
            </MemoryRouter>
        );
        
        const input = screen.getByRole('textbox');
        expect( input.value ).toBe('spider man');
        
        const img = screen.getByRole('img');
        expect( img.src ).toContain('/assets/heroes/marvel-spider.jpg')
    });
    

    test('should show error if hero(bob esponja) is not found', () => {
      
        render (
            <MemoryRouter initialEntries={['/search?q=bob esponja']}>
                <SearchPage/>                
            </MemoryRouter>
        );

        expect( screen.getByLabelText('errorText')).toBeTruthy();
        
    });

    test('should call navigate to the new page', () => {
      
        const inputValue = 'spider';

        render (
            <MemoryRouter initialEntries={['/search']}>
                <SearchPage/>                
            </MemoryRouter>
        );

        const input = screen.getByRole('textbox');
        fireEvent.change(input, { target: { name: 'searchText', value: inputValue }});

        const form = screen.getByRole('form');
        fireEvent.submit( form );

        expect( mockUseNavigate ).toHaveBeenCalledWith(`?q=${inputValue}`);
    });
    
    
});
