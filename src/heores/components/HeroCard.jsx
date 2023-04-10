import { Link } from "react-router-dom";

export const HeroCard = ({ heroe }) => {
    
    const heroImgUrl = `/assets/heroes/${heroe.id}.jpg`;
    const charactersByHero = <p>{ heroe.characters }</p>;


    return (

    <div className="col animate__animated animate__fadeIn">
        <div className="card">
            <div className="row no-gutters">
                <div className="col-4 ">
                    <img src={ heroImgUrl } alt={ heroe.superhero } className="card-img" />
                </div>

                <div className="col-8">
                    <div className="card-body">
                        <h5 className="card-title">{ heroe.superhero }</h5>
                        <p className="card-text">{ heroe.alter_ego } </p>
                        
                        {
                            ( heroe.alter_ego !== heroe.characters ) && charactersByHero
                        }

                        <p className="card-text">
                            <small className="text-muted">{ heroe.first_appearance }</small>
                        </p>
                        
                        <Link to={`/hero/${ heroe.id }`}>
                            Mas...
                        </Link>
                    </div>
                </div>
            </div>
        </div>
      
    </div>
  )
}
