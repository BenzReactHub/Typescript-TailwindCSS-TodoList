import { FC } from "react";
import TodoItem from "./TodoItem";

interface TodoListProps {
  data: {
    id: string;
    description: string;
  }[];
  handleDeleteTodoItem: (todoId: string) => void;
}

const TodoList: FC<TodoListProps> = ({ data, handleDeleteTodoItem }) => {
  // const dummyData = [
  //   {
  //     id: "1",
  //     description: "Learn React",
  //   },
  //   {
  //     id: "2",
  //     description: "Learn English",
  //   },
  //   {
  //     id: "3",
  //     description: "Learn Japanese",
  //   },
  // ];

  return (
    <div className="flex justify-center items-center flex-col gap-4 mt-6">
      {/* {dummyData.map((todoItem) => ( */}
      {data.map((todoItem) => (
        <TodoItem
          key={todoItem.id}
          id={todoItem.id}
          text={todoItem.description}
          handleDeleteTodoItem={handleDeleteTodoItem}
        />
      ))}
    </div>
  );
};

export default TodoList;
