import { useEffect, useState } from "react";
import { useLoaderData, useNavigate, useParams } from "react-router-dom";
import Card from "./Card";
import { MagicSpinner } from "react-spinners-kit";
const CoffeeCards = () => {
  const { category } = useParams();
  //   console.log(category);
  const data = useLoaderData();
  const navigate = useNavigate();
  const [coffees, setCoffees] = useState([]);
  const [loader, setLoader] = useState(false);
  useEffect(() => {
    if (category) {
      const filteredByCategory = data.filter(
        (coffee) => coffee.category === category
      );
      setCoffees(filteredByCategory);
      setLoader(false);
    } else {
      setCoffees(data.slice(0, 6));
      setLoader(false);
    }
  }, [data, category]);
  console.log(data);
  return (
    <div className="my-10">
      <h3 className="text-xl my-5 font-black">Coffee</h3>
      {loader ? (
        <MagicSpinner />
      ) : (
        <div className="grid md:grid-cols-3 gap-5">
          {coffees.map((coffee) => (
            <Card key={coffee.id} coffee={coffee}></Card>
          ))}
        </div>
      )}
      <div className="py-5">
        <button
          onClick={() => navigate("/coffee")}
          className="btn bg-rose-500 text-white"
        >
          View All
        </button>
      </div>
    </div>
  );
};

export default CoffeeCards;
