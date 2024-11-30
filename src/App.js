import "./App.css";
import React, { useState } from "react";

function App() {
  const [number, setNumber] = useState(0);

  return (
    <div className="mt-4 flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold text-center">{number}</h1>
      <h1 className="text-2xl text-center mt-2">
        {number % 2 === 0 ? "짝수" : "홀수"}
      </h1>
      <button
        className="mt-4 px-6 py-2 bg-blue-500 text-black rounded hover:bg-blue-700 transition-colors"
        onClick={() => setNumber(number + 1)}
      >
        증가
      </button>
    </div>
  );
}

export default App;
