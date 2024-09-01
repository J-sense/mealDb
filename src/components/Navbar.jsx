import React, { useState } from "react";

const Navbar = ({ handlesearch }) => {
  return (
    <div>
      <div className="navbar bg-base-100 ">
        <div className="flex-1">
          <a className="btn btn-ghost  font-bold text-pink-800 text-3xl font-serif">
            mealDb.
          </a>
        </div>
        <div className="flex-none gap-2">
          <div>
            <input
              type="text"
              name=""
              id=""
              onChange={handlesearch}
              className="border border-indigo-800 px-2  rounded-md py-2"
              placeholder="Search"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
