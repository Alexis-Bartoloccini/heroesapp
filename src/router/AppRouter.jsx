
import { Route,Routes } from 'react-router'

import {LoginPage} from "../auth"
import { HeroesRoutes } from '../heroes'
import { PrivateRoute } from './PrivateRoute'
import { PublicRoute } from './PublicRoute'


export const AppRouter = () => {
  return (
    <>

      <Routes>
        
              <Route path="login" element={
                  <PublicRoute>
                    <LoginPage/>
                  </PublicRoute>
              }/>
              <Route path="/*" element={
                // Se llama agrega el PrivateRoute para condicionar todo lo que este dentro de HeroesRoutes
                  <PrivateRoute>
                    <HeroesRoutes/>
                  </PrivateRoute>
              }/>
      </Routes>

    </>
  )
}
