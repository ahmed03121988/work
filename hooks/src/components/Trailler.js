import { useParams } from "react-router-dom";


const Trailler = ({moviesList})=>{
console.log(moviesList);
const valeur=useParams()
console.log(valeur);
const film = moviesList.find((el)=>el.id === Number(valeur.ID))
console.log(film);


    return(
        <div>
            <img src={film.image}/>
            
            
            
            
        </div>

    )
}
export default Trailler