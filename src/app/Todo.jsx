import { useEffect } from "react";
import { useRef, useState } from "react";

import "../styles/todo.css";

export const Todo = () => {
  const [todos, setTodos] = useState([]);
  const inputText = useRef(null);

  useEffect(() => {
    if (localStorage.getItem("todos") !== null) {
      setTodos(JSON.parse(localStorage.getItem("todos")));
    }
  }, []);

  useEffect(() => {
    if (todos.length !== 0) {
      localStorage.setItem("todos", JSON.stringify(todos));
    }
  }, [todos]);

  const TodoList = ({ todos }) => {
    const isCheckboxClicked = (id, isDone) => {
      setTodos((curr) => {
        return curr.map((todo) => {
          if (todo.id === id) {
            return { ...todo, isDone: !isDone }; // Toggle isDone
          }
          return todo;
        });
      });
    };
    return (
      <ul className="ListView">
        {todos.map((todo) => (
          <li key={todo.id} className="individualTodo">
            <input
              className="checkbox"
              type="checkbox"
              id={todo.id}
              checked={todo.isDone}
              onChange={() => isCheckboxClicked(todo.id, todo.isDone)}
            ></input>
            <span className="todoText">{todo.text}</span>
            <button className="deleteButton" onClick={() => removeTodo(todo.id)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    );
  };

  const addTodo = (text) => {
    setTodos((curr) => {
      const newTodo = { id: Date.now(), text, isDone: false };
      localStorage.setItem("todos", JSON.stringify([...curr, newTodo]));
      // console.log(localStorage.getItem("todos"));
      return [...curr, newTodo];
    });
  };

  const removeTodo = (id) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };

  // const deleteTodo = (text) => {
  //   setTodos((curr) => {
  //     return [...curr, { text, isDone: false }];
  //   });
  // };

  return (
    <>
      <div className="titleContainer">
        <span className="title">To-do list</span>
      </div>
      <div>
        <input className="InputBox" ref={inputText} type="text" placeholder="Add your Todo..." />
        <button
          className="AddButton"
          onClick={() => {
            if (inputText.current.value !== "") {
              addTodo(inputText.current.value);
              console.log("inputext " + inputText.current.value + " Todo added!");
              console.log(localStorage.getItem("todos"));
              // remove inputText
              inputText.current.value = "";
            }
          }}
        >
          + Add
        </button>
        <button
          className="DeleteAllButton"
          onClick={() => {
            localStorage.clear();
            setTodos([]);
          }}
        >
          Delete All
        </button>

        <TodoList todos={todos} />
      </div>
    </>
  );
};
