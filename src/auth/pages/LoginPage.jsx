import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

export const LoginPage = () => {

  const { login } = useContext( AuthContext)
  const navigate = useNavigate();

  const handleLogin = () =>{

    const lastPath = localStorage.getItem('lastPath') || '/';

    login('Brandon Jaimes');
    
    navigate(lastPath,{
      replace: true
    });
  }

  return (
    <div className="container mt-5">
        <h1>Login</h1>
        <hr />

        <button
          className="btn btn-dark"
          onClick={ handleLogin }
          >
            Login
        </button>
    </div>
  )
}
