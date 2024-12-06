import React, { useState } from "react";
import Menu from "./menu"; // Menu 컴포넌트
import Counter from "./counter";
import TodoList from "./todo";
import MenuList from "./menuList";

function Parent() {
  const [currentPage, setCurrentPage] = useState("menu"); // 현재 페이지 상태

  //페이지 구분용
  return (
    <>
      {currentPage === "menu" && <Menu onNavigate={setCurrentPage} />}
      {currentPage === "counter" && (
        <Counter onBack={() => setCurrentPage("menu")} />
      )}
      {currentPage === "todoList" && (
        <TodoList onBack={() => setCurrentPage("menu")} />
      )}
      {currentPage === "menuList" && (
        <MenuList onBack={() => setCurrentPage("menu")} />
      )}
    </>
  );
}

export default Parent;
