import { useLocation, useNavigate } from "react-router-dom";
import queryString from 'query-string';

import { useForm } from "../../hook/useForm";
import { HeroCard } from "../components/HeroCard";
import { getHeroesByName } from "../helpers";

export const SearchPage = () => {

    const navigate = useNavigate();
    const location = useLocation();

    // La librería query-string permite extraer todo lo del search dentro de location.
    /* 
        query:
           asc: "true"
           q: "búsqueda"
    */
    const { q = '' } = queryString.parse( location.search );
    const heroes = getHeroesByName( q );

    // Para mostrar o esconder los mensajes de alerta
    const showSearch = ( q.length === 0 );
    const showError = ( q.length > 0 ) && ( heroes.length === 0 );
    
    const { searchText, onInputChange } = useForm({
        searchText: q
    });

    const onSearchSubmit = (e) => {
        e.preventDefault();
        // if ( searchText.trim().length <= 1 ) return;
        
        navigate(`?q=${ searchText.toLowerCase() }`);
    }
    
    return (
        <>
            <h1>Busqueda</h1>
            <hr />

            <div className="row">
                <div className="col-5">
                    <h4>Buscar</h4>
                    <hr />
                    <form onSubmit={ onSearchSubmit }>
                        <input 
                            type="text" 
                            placeholder="Search a hero"
                            className="form-control"
                            name="searchText"
                            autoComplete="off"
                            value={ searchText }
                            onChange={ onInputChange }
                        />

                        <button className="btn btn-outline-primary mt-1">Buscar</button>
                    </form>
                </div>

                <div className="col-7">
                    <h4>Resultado</h4>
                    <hr />

                    {/* {
                        ( q === '' )
                        ? <div className="alert alert-primary">Buscar heroe</div> 
                        : ( heroes.length === 0  ) 
                        && <div className="alert alert-danger">No hay coincidencias con <b>{ q }</b></div>
                    } */}

                    <div className="alert alert-primary card animate__animated animate__fadeIn"   
                        style={{ display: showSearch ? '' : 'none' }}>
                        Buscar heroe
                    </div> 

                    <div className="alert alert-danger card animate__animated animate__fadeIn" 
                        style={{ display: showError ? '' : 'none' }}>
                        No hay coincidencias con "{ q }"
                    </div>

                    {
                        heroes.map( hero => (
                            <HeroCard className="card animate__animated animate__fadeIn" key={ hero.id } { ...hero } />
                        ))
                    }

                </div>
            </div>

        </>
    )
}