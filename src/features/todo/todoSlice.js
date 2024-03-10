import { createSlice , nanoid } from "@reduxjs/toolkit";

const initialState = {
    todos : [{id : 1, text : "Hello world"}]
}

//state gives the current state 

export const todoSlice = createSlice({
    name : 'todo',
    initialState,
    reducers :{
        addTodo : (state,action) => {
            const todo = {id : nanoid(), 
                text : action.payload
            };
            //update state
            state.todos.push(todo);

        },
        removeTodo : (state,action) => {
            state.todos=state.todos.filter((todo)=>todo.id != action.payload);

        },
    }
})

export const {addTodo , removeTodo} = todoSlice.actions;

export default todoSlice.reducer

