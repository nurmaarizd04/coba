import React from "react";

function Navbar() {
  // handle Buka menu
  const handleBukaMenu = () => {
    const menuIcon = document.querySelector(`.icon-hum`);
    const menuHp = document.querySelector(`.menu-hp`);

    menuHp.classList.toggle(`hidden`);
  };

  return (
    <div className="bg-black md:px-12 px-7 py-2 text-white">
      <div className="flex justify-between items-center">
        <div>
          <img className="w-[86px] bg-cover" src="images/logo.svg" />
        </div>
        <div className="md:block hidden  uppercase ">
          <a className="mr-14 font-medium text-[15x] tracking-wide cursor-pointer hover:text-indigo-500 duration-150 text-gray-200">
            Home
          </a>
          <a className="mr-14 font-medium text-[15x] tracking-wide cursor-pointer hover:text-indigo-500 duration-150 text-gray-200">
            Search
          </a>
          <a className="mr-14 font-medium text-[15x] tracking-wide cursor-pointer hover:text-indigo-500 duration-150 text-gray-200">
            Watchlist
          </a>
          <a className="mr-14 font-medium text-[15x] tracking-wide cursor-pointer hover:text-indigo-500 duration-150 text-gray-200">
            Movies
          </a>
          <a className="mr-14 font-medium text-[15x] tracking-wide cursor-pointer hover:text-indigo-500 duration-150 text-gray-200">
            Series
          </a>
        </div>
        <div>
          <div className="md:block hidden w-[35px] h-[35px] bg-gray-500 rounded-full shadow-lg shadow-white/20 ">
            o
          </div>
          {/* icon menu hum */}
          <div
            onClick={handleBukaMenu}
            className="block md:hidden cursor-pointer icon-hum duration-200 transition-all ease-in-out"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </div>
        </div>
      </div>
      {/* menu di hp */}
      <div className="hidden menu-hp duration-200 transition-all ease-in-out">
        <div className="flex text-right  flex-col mt-8 duration-200 transition-all ease-in-out">
          <a className="mb-9 font-medium text-[15x] tracking-wide cursor-pointer hover:text-indigo-500 duration-150 text-gray-200">
            Home
          </a>
          <a className="mb-9 font-medium text-[15x] tracking-wide cursor-pointer hover:text-indigo-500 duration-150 text-gray-200">
            Search
          </a>
          <a className="mb-9 font-medium text-[15x] tracking-wide cursor-pointer hover:text-indigo-500 duration-150 text-gray-200">
            Watchlist
          </a>
          <a className="mb-9 font-medium text-[15x] tracking-wide cursor-pointer hover:text-indigo-500 duration-150 text-gray-200">
            Movies
          </a>
          <a className="mb-9 font-medium text-[15x] tracking-wide cursor-pointer hover:text-indigo-500 duration-150 text-gray-200">
            Series
          </a>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
