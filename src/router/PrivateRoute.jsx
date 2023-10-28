import { useContext } from "react"
import { AuthContext } from "../auth"
import { Navigate, useLocation } from "react-router";





export const PrivateRoute = ({children}) => {

    const {logged} = useContext(AuthContext);

    // dentro de location tenemos a "pathname" y "search" que es nuestra ubicacion0
    // const {location}=useLocation()
    // console.log(location);

    const {search, pathname}=useLocation()

  const lastPath= pathname + search;
  // se guardo en localStorage el lastPath
  localStorage.setItem("lastPath", lastPath);
  
    return (
    //   condicional para avanzar en la ruta privada o no
        (logged) ? children : <Navigate to="/login"/>
  )
}

