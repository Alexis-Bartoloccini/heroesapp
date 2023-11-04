import { Link, NavLink, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../auth/context/AuthContext';
import { useContext } from 'react';


export const Navbar = () => {
    // se utiliza useContext para traer los datos del usuario para luego enviarlos a navbar.
    const {user,logout} = useContext(AuthContext)

    // console.log(user)
   
    // es un customHook que nos da herramientas como el navigate para implementar el Logout
    const navigate = useNavigate();


    const onLogout = () => {
        logout();
        navigate(
        "/login", 
        // el replace en true hace que cuando se haga click en el Logout se reemplace la direccion actual del navegador por /login haciendo que vuelva a la pagina de inicio
        {replace:true
        });
    } 

    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark p-2">
            
            <Link 
                className="navbar-brand" 
                to="/"
            >
                Associations
            </Link>

            <div className="navbar-collapse">
                <div className="navbar-nav">

                    <NavLink 
                    // isActive es una prop propio de NavLink, se le asigna valor true cuando estas en esa dirección en tu página, gracias a esto se le puede asignar un estilo css (active) si el usuario está en dicha dirección
                        className= { ({isActive}) => `nav-item nav-link ${ (isActive) ? "active" : ""}`}
                        to="/marvel"
                    >
                        Marvel
                    </NavLink>

                    <NavLink 
                        className= { ({isActive}) => (isActive ? 'nav-item nav-link active' : `nav-item nav-link`) }
                        to="/dc"
                    >
                        DC
                    </NavLink>
                    <NavLink 
                        className= { ({isActive}) => (isActive ? 'nav-item nav-link active' : `nav-item nav-link`) }
                        to="/search"
                    >
                        Search
                    </NavLink>
                </div>
            </div>

            <div className="navbar-collapse collapse w-100 order-3 dual-collapse2 d-flex justify-content-end">
                <ul className="navbar-nav ml-auto">
                    <span className='nav-item nav-link text-primary'>
                      {user?.name}
                    </span>
                    <button className='nav-item nav-link btn'
                    onClick={onLogout}>
                        Logout
                    </button>
                </ul>
            </div>
        </nav>
    )
}