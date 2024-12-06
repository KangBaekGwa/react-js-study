import React from "react";

function MenuList({ onBack }) {
  const handleClick = (e) => {
    e.preventDefault();
  };

  return (
    <nav className="flex justify-center mt-5">
      <ul className="flex gap-2 px-2 rounded-[5px] bg-blue-200">
        <li className="relative group">
          <button
            onClick={handleClick}
            className="px-10 py-3 bg-blue-500 text-white hover:bg-blue-700 transition-colors"
          >
            메뉴아이템1
          </button>
          <ul className="absolute w-full hidden group-hover:block z-10">
            <li>
              <button
                onClick={handleClick}
                className="w-full bg-blue-500 text-white hover:bg-blue-700 transition-colors hover:underline"
              >
                서브1-1
              </button>
              <button
                onClick={handleClick}
                className="w-full bg-blue-500 text-white hover:bg-blue-700 transition-colors hover:underline"
              >
                서브1-2
              </button>
            </li>
          </ul>
        </li>
        <li>
          <button
            onClick={handleClick}
            className="px-10 py-3 bg-blue-500 text-white hover:bg-blue-700 transition-colors"
          >
            메뉴아이템2
          </button>
        </li>
        <li>
          <button
            onClick={handleClick}
            className="px-10 py-3 bg-blue-500 text-white hover:bg-blue-700 transition-colors"
          >
            메뉴아이템3
          </button>
        </li>
      </ul>
    </nav>
  );
}

export default MenuList;
