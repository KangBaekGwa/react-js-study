import React, { useState } from "react";

function TodoList({ onBack }) {
  const [todoList, setTodoList] = useState([
    { id: 3, content: "야구" },
    { id: 2, content: "농구" },
    { id: 1, content: "축구" },
  ]);

  const [lastId, setLastId] = useState(3);

  const todoListAddFormSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    form.content.value = form.content.value.trim();

    if (form.content.value.length === 0) {
      alert("내용을 입력해 주세요.");
      form.content.focus();
      return;
    }

    const content = form.content.value;

    form.content.value = "";
    form.content.focus();

    const newTodo = {
      id: lastId + 1,
      content,
    };
    setLastId(lastId + 1);

    setTodoList([newTodo, ...todoList]);
  };

  const deleteTodo = (id) => {
    setTodoList(todoList.filter((e) => e.id !== id));
  };

  return (
    <div className="p-2">
      <form
        className="flex justify-center gap-2"
        onSubmit={todoListAddFormSubmit}
      >
        <input
          className="border p-2 rounded"
          placeholder="할일 내용"
          type="text"
          name="content"
          autocomplete="off"
        />
        <button type="submit" className="border p-2 rounded">
          작성
        </button>
      </form>

      <div className="flex justify-center">
        <ul className="mt-2 grid gap-2">
          {todoList.map((todo) => (
            <li className="text-center" key={todo.id}>
              {todo.id}. {todo.content}{" "}
              <button
                onClick={() => deleteTodo(todo.id)}
                className="border px-2 rounded"
                type="button"
              >
                x
              </button>
            </li>
          ))}
        </ul>
      </div>

      <div className="flex justify-center">
        <button
          className="mt-4 px-6 py-2 bg-red-500 text-white rounded hover:bg-red-700 transition-colors"
          onClick={onBack} // Menu로 돌아가기
        >
          메뉴로 돌아가기
        </button>
      </div>
    </div>
  );
}

export default TodoList;
