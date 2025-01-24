import { Outlet, useLoaderData } from "react-router-dom";
import Banner from "../components/Banner";
import Categories from "../components/Categories";

const Home = () => {
  const categories = useLoaderData();
  //   console.log(categories);
  return (
    <div>
      <Banner />
      <Categories categories={categories} />
      {/* Dynamic outlet */}
      <Outlet />
    </div>
  );
};

export default Home;
