import React, { useState } from "react";
import { ShoppingBasket } from "@mui/icons-material";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { filterVal } from '../redux/Slices/cartSlice'

const Navbar = () => {
  const [value, setValue] = useState("");
  const dispatch = useDispatch();
  const { cart } = useSelector((state) => state);
 
  const filterAllData = (val) => {
   dispatch(filterVal(val));
  };
  
  const handleOnchange = (e) => {
    setValue(e.target.value);
    filterAllData(e.target.value);
  }

  return (
    <>
      <nav className="flex items-center justify-between h-20  max-w-6xl mx-auto">
        <Link to={"/"}>
          <div className="ml-5">
            <h1 className="bg-gradient-to-br from-violet-900 to-purple-300 bg-clip-text text-transparent text-xl sm:text-2xl md:text-3xl font-bold logo cursor-pointer tracking-wider">
              REDUX-CART
            </h1>
          </div>
        </Link>
        <div className="cursor-pointer hover:text-purple-500 transition duration-300 ease-in">
           <input 
           className="relative m-0 -mr-0.5 block min-w-0 flex-auto rounded-l border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-neutral-700 outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:focus:border-primary" 
           value={value}
           placeholder="Search . . . . ."
           onChange={(e) => handleOnchange(e)}
           />
        </div>
        <div className="flex list-none items-center space-x-6 mr-5 text-gray-700 -tracking-tighterr font-semibold">
          <Link to={"/"}>
            <li className="cursor-pointer hover:text-purple-500 transition duration-300 ease-in">
              Home
            </li>
          </Link>
          <Link to={"/cart"}>
            <div className="relative">
              <ShoppingBasket className="text-2xl cursor-pointer hover:text-purple-600 transition transform duration-200" />

              {cart.length > 0 && (
                <div className="absolute bg-purple-600 text-xs w-5 h-5 flex justify-center items-center animate-bounce -top-1 -right-2 rounded-full top- text-white">
                  {cart.length}
                </div>
              )}
            </div>
          </Link>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
