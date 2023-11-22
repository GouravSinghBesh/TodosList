import { createContext,useContext } from "react";

const TodoContext = createContext({
    // todos : [
    //     {
    //         id: 1,
    //         todoData : todo,
    //         completed : false,
    //     }
    // ],
    addTodo : (todo)=>{},
    updateTodo : (todo,id)=>{},
    deleteTodo : (id)=>{},
    toggleCompleted : (id)=>{},
})

export  const TodoProvider = TodoContext.Provider;

export function useTodo (){
    return useContext(TodoContext);
}