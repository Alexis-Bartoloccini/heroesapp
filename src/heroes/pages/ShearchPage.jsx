import { useLocation, useNavigate } from "react-router";
import { useForm } from "../../hooks/useForm"
import { HeroCard } from "../components/HeroCard"
import queryString from "query-string"
import { getHeroByName } from "../helpers";

export const Shearch = () => {


  const navigate = useNavigate();

  // se instala query-string (para extraer todo lo que se encuentra en el objet search en el form)
  const location = useLocation()
  // const query = queryString.parse(location.search)
  // console.log(query)
  // desestructuro el query abajo para tomar siempre solo la "q" del objeto, lo que significa entre corchetes{} es que siempre se recupera el valor de "q" y en caso de que no haya nada en "q" se toma un string vacío ("")
    const {q =""} = queryString.parse(location.search)
    const heroes= getHeroByName(q)

    // si el usuario aun no ha digitado nada esta en true, sino false
    const showShearch= (q.length===0) ? true : false;
  // si el usuario digito algo y no aparecio ningun heroe esta en true, sino en false
    const showError= (q.length!==0 && heroes.length===0) ? true : false;
  const { searchText, onInputChange}= useForm({
    searchText: q
  });




  const onSearchSubmit = (event) => {
    event.preventDefault();
    if (searchText.trim().length <=1) return

    // console.log(searchText);
    navigate (`?q=${ searchText }`)
  }




  return (
   <>
      <h1>Search</h1>
      <hr />
      <div className="row">
          <div className="col-5">
            <h4>Searching</h4>
            <hr />
            <form onSubmit={onSearchSubmit}>
                <input 
                autoComplete="off"
                name="searchText"
                className="form-control"
                placeholder="Search a hero"
                type="text"
                value= {searchText}
                onChange={onInputChange} />
                <button className="btn btn-outline-primary mt-1">
                  Search
                </button>
            </form>
          </div>
          <div className="col-7">
            <h4>Results</h4>
            <hr />
            
            <div className="alert alert-primary"
            style={{display:(showShearch) ? "" : "none"}}
            >
            Search a hero
            </div>
            
            <div className="alert alert-danger"
            style={{display: (showError)? "" : "none"}}>
            No hero with <b>{q}</b>
            </div>
            
          </div>
          {
            heroes.map( hero => (
              <HeroCard key={hero.id} {...hero}/>

            ))
          }
          {/* <HeroCard/> */}


      </div>
   </>
  )
}
