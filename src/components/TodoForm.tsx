// import { FC, FormEvent, useRef } from "react";
import { FC, FormEvent, useState } from "react";

interface TodoFormProps {
  handleAddTodoItem: (inputValue: string) => void;
}

const TodoForm: FC<TodoFormProps> = ({ handleAddTodoItem }) => {
  // const inputRef = useRef<HTMLInputElement>(null);
  const [input, setInput] = useState("");

  const handleTodoSubmit = (event: FormEvent) => {
    event?.preventDefault();
    // const inputValue = inputRef.current!.value;
    // console.log(inputValue);
    // handleAddTodoItem(inputValue);
    handleAddTodoItem(input);
    setInput("");
  };

  return (
    <form
      onSubmit={handleTodoSubmit}
      className="w-full flex justify-center items-center gap-4 mt-4"
    >
      <input
        className="p-2 border rounded-md"
        type="text"
        placeholder="Please Type any Text"
        // ref={inputRef}
        value={input}
        onChange={(e) => {
          setInput(e.target.value);
        }}
      />
      <button
        className="px-4 py-2 rounded font-bold text-white bg-blue-700"
        type="submit"
      >
        Submit
      </button>
    </form>
  );
};

export default TodoForm;
