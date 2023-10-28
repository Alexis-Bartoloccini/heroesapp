import { Navigate, useNavigate, useParams } from "react-router"
import { getHeroByID } from "../helpers";
import { Link } from "react-router-dom";
import {  useMemo } from "react";




export const Hero = () => {


  // Se utiliza useParams para acceder al id que se encuentra definido en la ruta
   const {id} = useParams();
 console.log(id)
   const hero= useMemo(()=> getHeroByID(id), [id]) 

// Usando "useNavigate" para volver hacia atras:
// utiliza el hook y se le indica que vuelta una vez hacia atras "-1"
  const navigate = useNavigate()
   const onNavigateBack=()=>{
    navigate(-1)
   }
  //  esta es otra forma de redireccionar al usuario hacia "atras" con "Link"
    let direction="" 
    if(hero.publisher==="DC Comics") { direction="dc"} else { direction="marvel"}

// Esta seccion del codigo, envia al usuario a la pagina /marvel si no hay heroe encontrado 
  if (!hero) { 
    return (<Navigate to="/marvel"/>)
   }
    return (
      <div className="row mt-5">
         <div className="col-4">
            <img 
            src={`/heroes/${id}.jpg`} 
            alt= {hero.superhero}
            className="img-thumbnail animate__animated animate__bounceInUp"
            />
          </div>
          <div className="col-8">
            <h3>{hero.superhero}</h3>
            <ul className="list-group list-group-flush">
              <li className="list-group-item"><b>Alter ego:</b> {hero.alter_ego}</li>
              <li className="list-group-item"><b>Publisher:</b> {hero.publisher}</li>
              <li className="list-group-item"><b>Fiers appearance:</b> {hero.first_appearance}</li>
            </ul>
            <h5 className="mt-3">Characters</h5>
            <p>{hero.characters}</p>
            <button 
            onClick={onNavigateBack}
            className="btn btn-outline-primary">
                Back
            </button>

          </div>
      </div>
    )
}
