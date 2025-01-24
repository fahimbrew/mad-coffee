import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";

const Categories = ({ categories }) => {
  return (
    <div className="container mx-auto my-11">
      <h3 className="font-black text-xl text-rose-700 my-9">
        Mad Coffee collection :-
      </h3>
      {/* name of each tab group should be unique */}
      <div>
        <div role="tablist" className="tabs tabs-lift">
          {categories.map((category) => (
            <NavLink
              to={`/category/${category.category}`}
              key={category.id}
              className={({ isActive }) =>
                `tab ${isActive ? "tab-active" : ""}`
              }
              role="tab"
            >
              {category.category}
            </NavLink>
          ))}
        </div>
      </div>
    </div>
  );
};
Categories.propTypes = {
  categories: PropTypes.array,
};

export default Categories;
