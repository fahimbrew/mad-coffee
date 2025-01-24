import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { addFavorites, getAllFavorites } from "../Utils";

const CardDetails = () => {
  const { id } = useParams();
  const data = useLoaderData();
  const [coffee, setCoffee] = useState({});
  const [isFavorite, setIsFavorite] = useState(false);
  useEffect(() => {
    const singleData = data.find((coffee) => coffee.id == id);
    setCoffee(singleData);
    // console.log(singleData);
    const favorites = getAllFavorites();
    const isExist = favorites.find((item) => item.id == singleData.id);
    if (isExist) {
      setIsFavorite(true);
    }
  }, [data, id]);

  const handleFavorite = (coffee) => {
    // getAllFavorites();
    addFavorites(coffee);
    setIsFavorite(true);
  };
  return (
    <div>
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row">
          <img src={coffee.image} className="max-w-sm rounded-lg shadow-2xl" />
          <div>
            <h1 className="text-5xl font-bold">{coffee.name}</h1>
            <p className="py-6">{coffee.description}</p>
            <button
              disabled={isFavorite}
              onClick={() => handleFavorite(coffee)}
              className="btn bg-rose-600 text-white"
            >
              Add to Favorite
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardDetails;
