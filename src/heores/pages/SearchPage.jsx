import { useLocation, useNavigate } from "react-router-dom";
import queryString from 'query-string';

import { useForm } from "../../hooks/useForm"
import { HeroCard } from "../components"
import { getHeroesByName } from "../helpers";

export const SearchPage = () => {

  const navigate = useNavigate();
  const location = useLocation();
  const { q = '' }= queryString.parse( location.search );
  const heroes = getHeroesByName( q );
 
  const showSearch = q.length === 0;
  const showError = q.length > 0 && heroes.length === 0

  const { searchText, handleInputChage } = useForm({
    searchText: q
  });

  const handleSubmit = (e) => {

    e.preventDefault();
    navigate(`?q=${ searchText }`);
  }


  return (
    <>
      <h1 className="mt-2">Search</h1>
      <hr />

      <div className="row">
            <div className="col-5">
              <h4>Searching</h4>
              <hr />
              <form aria-label="form" onSubmit={ handleSubmit }>
                <input 
                  autoComplete="off"
                  className="form-control"
                  name="searchText"
                  onChange={ handleInputChage } 
                  placeholder="Search a hero"
                  type="text"
                  value={ searchText } />

                  <button className="btn btn-dark mt-1">
                    Search
                  </button>
              </form>
            </div>

            <div className="col-7">
              <h4>Results</h4>
              <hr />

              {
                showSearch && <div className="alert alert-primary"> Search a hero </div>
              }

              {
                showError && <div  aria-label="errorText" className="alert alert-danger"> No hero with  <b>{ q }</b></div>
              }

              {
                heroes.map( heroe =>
                  <HeroCard key={ heroe.id } heroe={ heroe } />)
              }

            </div>
      </div>
    </>
  )
}

