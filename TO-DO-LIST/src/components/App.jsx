import React, { useState } from "react";
import Todo from "./Todo"
function App() {
  const [items, setitems] = useState(["A Item 1", "A Item 2"]);
  const [inputvalue, setinputvalue] = useState("");
  
  function add() {
    setitems((previtem) => {
      return [...previtem, inputvalue];
    });
    setinputvalue("");
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            add();
          }}
        >
          <input
            id="inp"
            type="text"
            value={inputvalue}
            onChange={(e) => {
              setinputvalue(e.target.value);
            }}
          />
          <button>
            <span>Add</span>
          </button>
        </form>
      </div>
      <div>
        <ul>
          {items.map((i) => {
            return (
              <Todo item={i}/>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default App;
