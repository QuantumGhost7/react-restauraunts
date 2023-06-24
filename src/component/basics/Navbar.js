import React from "react";

const Navbar = ({ filterItems, menuList }) => {
  return (
    <>
      <nav className="navbar">
        <div className="btn-group">
          {menuList.map((curElem) => {
            return (
              <button
                className="btn-group__item"
                onClick={() => filterItems(curElem)}
              >
                {curElem}
              </button>
            );
          })}

          {/* <button className="btn-group__item" onClick={() => setmenuData(Menu)}>
            All
          </button> */}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
