import { Link } from "react-router-dom"

const CharacterByHero = ({ alter_ego, characters }) => {

    return ( alter_ego === characters )
            ? <></> 
            : <p>{ characters }</p>;
}

export const HeroCard = ({ 
    id,
    superhero,
    publisher,
    alter_ego,
    first_appearance,
    characters
    }) => {

        const heroImageUrl = `/heroes/${ id }.jpg`;

        return (
            <div className="col" >
                <div className="card mb-3 animate__animated animate__fadeIn">
                    <div className="row g-0">
                        <div className="col-md-4">
                            <img src={ heroImageUrl } className="img-fluid rounded-start" alt={ superhero } />
                        </div>

                        <div className="col-md-8">
                            <div className="card-body">
                                <h5 className="card-title fs-6" >{ superhero }</h5>
                                <p className="card-text fw-normal" >{ alter_ego }</p>

                                {/* <p>{ alter_ego !== characters && characters }</p>
                                <CharacterByHero characters={ characters } alter_ego={ alter_ego }/>

                                <p className="card-text fw-normal" >
                                    <small className="text-muted" >{ first_appearance }</small>
                                </p> */}

                                <Link to={ `/hero/${ id }` } >
                                    más...
                                </Link>
                                
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div> 
        )

    }