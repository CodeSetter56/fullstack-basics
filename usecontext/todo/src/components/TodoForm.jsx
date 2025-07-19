import { useState } from "react";
import { useTodo } from "../context/TodoContext";

function TodoForm() {

    const [text, setText] = useState("")
    const {addTodo} = useTodo()

    const handleSubmit = (e) =>{
        e.preventDefault()
        addTodo(text)
        setText("")
    }

  return (
    <form className="flex" onSubmit={handleSubmit}>
      <input
        type="text"
        value={text}
        placeholder="Write Todo..."
        onChange={(e)=>setText(e.target.value)}
        className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
      />
      <button
        type="submit"
        className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0"
      >
        Add
      </button>
    </form>
  );
}

export default TodoForm;
