import { Navigate, Route, Routes } from "react-router-dom"
import { NavBar } from "../../ui"
import { DcPage, HeroPage, MarvelPage, SearchPage } from "../pages"

export const HeroesRoutes = () => {

    return (
        <>
            <NavBar />

            <div className="container">
                <Routes>
                    <Route path="/heroes/marvel" element={ <MarvelPage /> } />
                    <Route path="/heroes/dc" element={ <DcPage /> } />

                    <Route path="/heroes/search" element={ <SearchPage /> } />
                    <Route path="/heroes/hero/:id" element={ <HeroPage /> } />

                    <Route path="/heroes/" element={ <Navigate to="marvel" /> } />
                </Routes>
            </div>
            
        </>
    )
}