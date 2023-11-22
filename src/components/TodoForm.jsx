import React, { useState } from 'react'
import { useTodo } from '../context/context';

const TodoForm = () => {
    const[todoText,setTodoText] = useState("");
    const {addTodo} = useTodo();
    const add = (e)=>{
        e.preventDefault();
        if(!add) return

        addTodo(todoText);
        setTodoText("");
    }
  return (
    <form onSubmit={add}>
        <input type="text" value={todoText}
        onChange={(e)=>(setTodoText(e.target.value))}
        placeholder='Enter the todo here'
        className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
        />
        <button type='submit' className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0">Add</button>

    </form>
  )
}

export default TodoForm