import { Navbar } from "../../ui"
import { Routes , Route } from "react-router"
import { MarvelPage , DcPage , Shearch , Hero } from "../pages"
import { Navigate } from "react-router"

export const HeroesRoutes = () => {
  return (
    <>
        <Navbar/>
        <div className='container'>
            <Routes>
                <Route path="/marvel" element={<MarvelPage />}/>
                <Route path="/dc" element={<DcPage />} />
                <Route path="/search" element={<Shearch />} />
                {/* en /hero/:id el id toma el valor del id de heroe de la URL que tiene el navegador en ese momento, esto es propio de React-router-dom */}
                <Route path="/hero/:id" element={<Hero />} />
                {/* Permite que la página vuelva a "marvelpage" cuando la dirección no sea válida */}
                <Route path="/" element={<Navigate to="/marvel"/>}/>
            
            </Routes>
        </div>
        
    </>
  )
}
