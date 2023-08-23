import React from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div className="bg-black h-14 text-white font-bold flex  justify-between p-5 items-center sticky">
      <div>Punit</div>
      <div className="flex gap-5">
        <button className="bg-gray-500 w-28 h-8 hover:bg-gray-700 transition-all">
          <Link to={"/"}> Chall 1</Link>
        </button>
        <button className="bg-gray-500 w-28 h-8 hover:bg-gray-700 transition-all">
          <Link to={"/chall2"}> Chall 2</Link>
        </button>
      </div>
    </div>
  );
};

export default Navbar;
