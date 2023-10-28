import { useNavigate } from "react-router"
import { AuthContext } from "../context/AuthContext"
import { useContext } from "react"


export const LoginPage = () => {


    const {login } = useContext(AuthContext)

    const navigate = useNavigate()

  const onLogin = () => {

   
    // si lastPath existe lo toma en local storage, sino manda el path "/"
    const lastPath= localStorage.getItem("lastPath") || "/" ;

    login("Alexis")
    navigate( lastPath ,
    {replace: true }      )
  }

  return (
    <div className="container mt-5">
      <h1>Login</h1>
      <hr />
      <button className=" btn btn-primary"
      onClick={onLogin}>
        Login
      </button>


    </div>
  )
}
