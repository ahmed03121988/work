import { useNavigate } from "react-router-dom";
import ReactStars from "react-stars";
const MovieCard = ({ el }) => {
  const navigat = useNavigate()
  return (
    <div className="screen-2">
      <div className="top-image">
        <img src={el.image} alt="poster" />
      </div>

      <div className="main-heading">
        <h1 className="title">{el.name}</h1>

        <div className="row">
          {
            <ReactStars
              count={5}
              value={el.rating}
              size={24}
              color2={"#ffd700"}
              edit={false}
            />
          }
          <span>{el.date}</span>
          <span className="r">R</span>

          <span className="hd">HD</span>
        </div>
      </div>

      <div className="categories">
        <a href="#" className="active">
          Description
        </a>
        <a href="#">Episodes</a>
        <a href="#">Reviews</a>
      </div>

      <p className="description">{el.description}</p>
       
      <button onClick={()=>navigat(`/detaille/${el.id}`)}>see more</button>
    </div>
  );
};
export default MovieCard;
