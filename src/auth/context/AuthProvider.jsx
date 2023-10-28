
import { useReducer } from 'react'
import { AuthContext } from './AuthContext'
import { authReducer } from './authReducer'
import { types } from '../types/types'


// funcion que se ejecuta siempre que se recarga el navegador
const init=()=>{
  const user =JSON.parse(localStorage.getItem("user"))

  return {
    logged: !!user,
    user: user,
  }
}

export const AuthProvider = ({children}) => {

   
   const [ authState, dispatch] = useReducer(authReducer, {}, init)

  //  se crea la funcion login que expone los datos del usuario "id" y "nombre" que luego se envian al .Provider entre {}
  const login = (name = "") => {
      const user = {id: "ABC",name: name}
      const action= {type: types.login,payload:user}

    localStorage.setItem("user", JSON.stringify(user))

    dispatch(action)
  }
  const logout =()=>{
    localStorage.removeItem("user");
    const action = {type: types.logout}

    dispatch(action)
  }
  return (
   <AuthContext.Provider value= {{
    ...authState,
// metodos a exponer:
    login:login,
    logout:logout }}
    >
    {children}
   </AuthContext.Provider>
  )
}
