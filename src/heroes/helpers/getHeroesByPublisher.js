import { heroes } from "../data/heroes";

export const getHeroesByPublisher = (publisher) =>{
    const validPublishers= ["DC Comics", "Marvel Comics"];
// condicional usado para alertar cuando no se elije un publisher válido. 
    if (!validPublishers.includes(publisher)){
        throw new Error(`${publisher} is not a valid publisher`)
    }
// filtro de herores según publisher.(llama al elemento "heroe", luego busca el publisher y lo compara con el publisher buscado)
    return heroes.filter( heroe=> heroe.publisher === publisher)
}