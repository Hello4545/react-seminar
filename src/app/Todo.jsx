import { useEffect } from "react";
import { useRef, useState } from "react";

export const Todo = () => {
  const [todos, setTodos] = useState([]);
  const inputText = useRef(null);

  useEffect(() => {
    if (localStorage.getItem("todos") !== null) {
      setTodos(JSON.parse(localStorage.getItem("todos")));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const TodoList = ({ todos }) => {
    return (
      <ul>
        {todos.map((todo) => (
          <li key={todo.id} className="individualTodo">
            <span>{todo.text}</span>
            <button onClick={() => removeTodo(todo.id)}>Delete</button>
          </li>
        ))}
      </ul>
    );
  };

  const addTodo = (text) => {
    setTodos((curr) => {
      return [...curr, { id: Date.now(), text, isDone: false }];
    });
  };

  const removeTodo = (id) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id)); // Update todos state
  };

  // const deleteTodo = (text) => {
  //   setTodos((curr) => {
  //     return [...curr, { text, isDone: false }];
  //   });
  // };

  return (
    <>
      <span className="title">To-do list</span>
      <input ref={inputText} type="text" placeholder="Add your Todo..." />
      <button
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
        onClick={() => {
          localStorage.clear();
          setTodos([]);
        }}
      >
        Delete All
      </button>

      <TodoList todos={todos} />
    </>
  );
};
