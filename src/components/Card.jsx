import PropTypes from "prop-types";
import { Link, useLocation } from "react-router-dom";
import { IoTrashBinSharp } from "react-icons/io5";

const Card = ({ coffee, handleRemove }) => {
  //   console.log(coffee);
  const { pathname } = useLocation();
  console.log(location);
  const { image, name, description, rating, popularity, id } = coffee;
  return (
    <div className="relative">
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
              <Link to={`/${id}`}>View</Link>
            </button>
          </div>
        </div>
      </div>
      {pathname === "/dashboard" && (
        <div className="absolute top-0 left-0">
          <button
            onClick={() => handleRemove(id)}
            className="btn rounded-full bg-rose-500 text-2xl"
          >
            <IoTrashBinSharp />
          </button>
        </div>
      )}
    </div>
  );
};

Card.propTypes = {
  coffee: PropTypes.object,
};

export default Card;
