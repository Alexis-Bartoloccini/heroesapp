import { heroes } from "../data/heroes"


export const getHeroByID=(id)=>{
// si "find" no encuentra nada, devuelve undefined, busca el heroe cuyo id sea igual al proporcionado a la funcion
           return heroes.find(heroe=> heroe.id ===id)
}