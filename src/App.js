import React, { useState, useEffect } from "react";
import Item from "./components/Item";
import FilterButton from "./components/FilterButton";
import menu from "./menuData";
const App = () => {
  const [menuArr, setMenu] = useState(menu);
  const [filterMenu, setFilter] = useState("All");

  useEffect(() => {
    setMenu(() => {
      return menu.filter((item) => {
        return filterMenu === "All"
          ? { ...menu }
          : item.category === filterMenu;
      });
    });
  }, [filterMenu]);

  const filterFunc = (category) => {
    return setFilter(category);
  };

  const itemsArr = menuArr.map((item) => {
    return <Item key={item.id} item={item} />;
  });

  const categories = menu.reduce(
    (values, item) => {
      if (!values.includes(item.category)) {
        values.push(item.category);
      }

      return values;
    },
    ["All"]
  );

  const btns = categories.map((category) => {
    return (
      <FilterButton
        key={category}
        type={category}
        filter={() => filterFunc(category)}
      />
    );
  });

  return (
    <section className="menu">
      <div className="title">
        <h2>our menu</h2>
        <div className="underline"></div>
      </div>

      <div className="btn-container">{btns}</div>

      <div className="section-center">{itemsArr}</div>
    </section>
  );
};

export default App;
