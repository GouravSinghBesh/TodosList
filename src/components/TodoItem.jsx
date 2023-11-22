import React, { useState } from 'react'
import { useTodo } from '../context/context'

const TodoItem = ({todo}) => {
    const { toggleCompleted,updateTodo ,deleteTodo} = useTodo();
    const [isTodoEditable,setIsTodoEditable] = useState(false);
    const[todoMsg,setTodoMsg] = useState(todo.todoData)

    const toggleChange = () => {
        toggleCompleted(todo.id);
    }

    const editTodo = ()=>{
        updateTodo(todo.id,{...todo,todoData : todoMsg})
        setIsTodoEditable(false);
    }
    return (
        <div
            className={`flex border border-black/10 rounded-lg px-3 py-1.5 gap-x-3 shadow-sm shadow-white/50 duration-300  text-black ${todo.completed ? "bg-[#c6e9a7]" : "bg-[#ccbed7]"
                }`}
        >
            <input type="checkbox"
                checked={todo.completed}
                onChange={toggleChange}
                className="cursor-pointer"
            />

            <input type="text" 
            readOnly={!isTodoEditable}
            className={`border outline-none w-full bg-transparent rounded-lg ${
                isTodoEditable ? "border-black/10 px-2" : "border-transparent"
            } ${todo.completed ? "line-through" : ""}`}
            value={todoMsg}
            onChange={(e)=> setTodoMsg(e.target.value)}
            />

            {/* button-edit and save */}
            <button 
                className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0 disabled:opacity-50"
                onClick={()=>{
                    if(todo.completed) return;

                    if(isTodoEditable){
                        editTodo();
                    }
                    else{
                        setIsTodoEditable((prev)=> !prev)
                    }
                }}
                disabled={todo.completed}
            >
                {isTodoEditable ? "📁" : "✏️"}</button>

            <button 
             className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0"
            onClick={()=>{
                    deleteTodo(todo.id);
            }}> ❌</button>
        </div>
    )
}

export default TodoItem