import { HeroList } from "../components/heroList"

export const DcPage = () => {

    const publisher = 'DC Comics';
    return ( 
        <>
            <h1>{ publisher }</h1>
            <hr />

            <HeroList publisher={ publisher } />
        </>
    )
}