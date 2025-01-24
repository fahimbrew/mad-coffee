import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Card = ({ coffee }) => {
  //   console.log(coffee);
  const { image, name, description, rating, popularity } = coffee;
  return (
    <div>
      <div className="card bg-base-100 w-96 shadow-sm">
        <figure className="px-10 pt-10">
          <img src={image} alt="" className="rounded-xl h-80 object-cover" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{name}</h2>
          <p>{description}</p>
          <p className=" font-semibold">Rating: {rating}</p>
          <p className=" font-semibold">Popular: {popularity}</p>
          <div className="card-actions">
            <button className="btn bg-rose-600 text-white">
              <Link>View</Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

Card.propTypes = {
  coffee: PropTypes.object,
};

export default Card;
