import { useEffect, useState } from "react";
import { getAllFavorites, removeFromFav } from "../Utils";
import Card from "../components/Card";

const Dashboard = () => {
  const [coffees, setCoffees] = useState([]);
  useEffect(() => {
    const favorites = getAllFavorites();
    setCoffees(favorites);
  }, []);

  const handleRemove = (id) => {
    removeFromFav(id);
    const favorites = getAllFavorites();
    setCoffees(favorites);
  };
  return (
    <div>
      <h3 className="font-black text-3xl text-center my-10">Dashboard</h3>

      <div className="grid md:grid-cols-3 gap-5">
        {coffees.map((coffee) => (
          <Card
            key={coffee.id}
            handleRemove={handleRemove}
            coffee={coffee}
          ></Card>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
