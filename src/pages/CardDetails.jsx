import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";

const CardDetails = () => {
  const { id } = useParams();
  const data = useLoaderData();
  const [coffee, setCoffee] = useState({});
  useEffect(() => {
    const singleData = data.find((coffee) => coffee.id == id);
    setCoffee(singleData);
    console.log(singleData);
  }, [data, id]);
  return (
    <div>
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row">
          <img src={coffee.image} className="max-w-sm rounded-lg shadow-2xl" />
          <div>
            <h1 className="text-5xl font-bold">{coffee.name}</h1>
            <p className="py-6">{coffee.description}</p>
            <button className="btn bg-rose-600 text-white">
              Add to Favorite
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardDetails;
