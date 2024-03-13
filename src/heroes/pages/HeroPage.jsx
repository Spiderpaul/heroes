import { useMemo } from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom"
import { getHeroById } from "../helpers";

export const HeroPage = () => {

    const { id } = useParams();
    const navigate = useNavigate();
    
    const hero = useMemo( () => getHeroById( id ), [id]); 

    const onNavigateBack = () => {
        // navigate(-1);  // Para regresar uno en el historial (puede sacar del navegador).
        ( hero.publisher === 'Marvel Comics' ) ? navigate( '/marvel' ) : navigate( '/dc');
    }
    
    if ( !hero ) {
        return <Navigate to="/" />
    }
    
    return (
        <div className="row mt-5">
            <div className="col-4">
                <img 
                    src={ `/public/heroes/${ hero.id }.jpg` } 
                    alt={ hero.superhero } 
                    className="img-thumbnail animate__animated animate__bounceInLeft"
                />
            </div>

            <div className="col-8" >
                <h3>{ hero.superhero }</h3>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item"> <b>Alter ego: </b> { hero.alter_ego } </li>
                    <li className="list-group-item"> <b>Editorial: </b> { hero.publisher } </li>
                    <li className="list-group-item"> <b>Primera aparición: </b> { hero.first_appearance } </li>
                </ul>

                <h5 className="mt-3">Personajes</h5>
                <p>{ hero.characters }</p>

                <button 
                    className="btn btn-outline-primary"
                    onClick={ onNavigateBack }
                >
                    Atras
                </button>

            </div>
            
        </div>
    )
}