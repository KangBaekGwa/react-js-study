import React from "react";

function Menu({ onNavigate }) {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto grid max-w-7xl gap-20 px-6 lg:px-8 xl:grid-cols-3">
        <div className="max-w-xl">
          <h2 className="text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl">
            메인 페이지
          </h2>
          <p className="mt-6 text-lg text-gray-600">
            리액트와 Tailwind CSS로 페이지 전환 연습 중입니다.
          </p>
        </div>
        <ul className="grid gap-x-2 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2">
          <li>
            <div className="flex items-center gap-x-6">
              <button
                className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700 transition-colors"
                onClick={() => onNavigate("counter")}
              >
                홀짝 카운터
              </button>
            </div>
          </li>
          <li>
            <div className="flex items-center gap-x-6">
              <button
                className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700 transition-colors"
                onClick={() => onNavigate("todoList")}
              >
                할일 리스트
              </button>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Menu;
