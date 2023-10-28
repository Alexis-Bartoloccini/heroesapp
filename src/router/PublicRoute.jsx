import { useContext } from "react"
import { AuthContext } from "../auth"
import { Navigate } from "react-router"


export const PublicRoute = ({children }) => {

    const {logged} = useContext(AuthContext)

  return (
// si no esta autenticado envia el usuario a "/*", si esta autenticado lo envia al children que en este caso seria "Login"
    (!logged) ? children : <Navigate to="/*" /> 

  )
}
