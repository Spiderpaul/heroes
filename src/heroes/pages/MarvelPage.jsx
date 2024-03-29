import { HeroList } from "../components/heroList";

export const MarvelPage = () => {

    const publisher = 'Marvel Comics';

    return ( 
        <>
            <h1>{ publisher }</h1>
            <hr />

            <HeroList publisher={ publisher } />
        </>
    )
}