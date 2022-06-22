import { FC, useState } from "react";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import Todo from "./models/Todo.model";
const App: FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const handleAddTodoItem = (inputValue: string) => {
    setTodos((prevTodos) => [
      ...prevTodos,
      { id: Math.random().toString(), description: inputValue },
    ]);
    // console.log(inputValue);
  };

  const handleDeleteTodoItem = (todoId: string) => {
    setTodos((prevTodos) =>
      prevTodos.filter((todoItem) => todoItem.id !== todoId)
    );
  };

  return (
    <div>
      <header className="w-full bg-blue-500 h-24 flex justify-center items-center">
        <div className="text-center text-4xl font-bold">
          Learn to make Todo App
        </div>
      </header>
      <TodoForm handleAddTodoItem={handleAddTodoItem} />
      <TodoList data={todos} handleDeleteTodoItem={handleDeleteTodoItem} />
    </div>
  );
};

export default App;
