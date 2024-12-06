import React from "react";

function MenuList({ onBack }) {
  const handleClick = (e) => {
    e.preventDefault();
  };

  return (
    <nav className="flex justify-center">
      <ul className="flex mt-2 gap-2">
        <li className="relative group">
          <button
            onClick={handleClick}
            className="px-10 py-3 bg-blue-500 text-white rounded hover:bg-blue-700 transition-colors"
          >
            메뉴아이템1
          </button>
          <ul className="absolute w-full hidden group-hover:block z-10">
            <li>
              <button
                onClick={handleClick}
                className="w-full bg-blue-500 text-white rounded hover:bg-blue-700 transition-colors hover:underline"
              >
                서브1-1
              </button>
              <button
                onClick={handleClick}
                className="w-full bg-blue-500 text-white rounded hover:bg-blue-700 transition-colors hover:underline"
              >
                서브1-2
              </button>
            </li>
          </ul>
        </li>
        <li>
          <button
            onClick={handleClick}
            className="px-10 py-3 bg-blue-500 text-white rounded hover:bg-blue-700 transition-colors"
          >
            메뉴아이템2
          </button>
        </li>
        <li>
          <button
            onClick={handleClick}
            className="px-10 py-3 bg-blue-500 text-white rounded hover:bg-blue-700 transition-colors"
          >
            메뉴아이템3
          </button>
        </li>
      </ul>
    </nav>
  );
}

export default MenuList;
