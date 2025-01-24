import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Card from "../components/Card";

const Coffee = () => {
  const data = useLoaderData();
  const [coffees, setCoffees] = useState(data);
  const handleSort = (sortBy) => {
    if (sortBy === "popularity") {
      const sorted = [...data].sort((a, b) => b.popularity - a.popularity);
      setCoffees(sorted);
    } else if (sortBy === "rating") {
      const sorted = [...data].sort((a, b) => b.rating - a.rating);
      setCoffees(sorted);
    }
  };
  return (
    <div>
      <div className="flex justify-center my-10 gap-3">
        <button
          onClick={() => handleSort("popularity")}
          className="btn btn-outline text-rose-600"
        >
          Sort By Popularity
        </button>
        <button
          onClick={() => handleSort("rating")}
          className="btn btn-outline bg-rose-600 text-white"
        >
          Sort By Ratings
        </button>
      </div>
      <div className="grid md:grid-cols-3 gap-5">
        {coffees.map((coffee) => (
          <Card key={coffee.id} coffee={coffee}></Card>
        ))}
      </div>
    </div>
  );
};

export default Coffee;
