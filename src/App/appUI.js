import React from "react";
import { TodoContext } from "../TodoContext";
import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem';
import { CreateTodoButton } from '../CreateTodoButton';
import { Modal } from '../modal';
import { TodoForm } from '../TodoForm';



function AppUI()  {
    const {searchedTodos, completeTodo, deleteTodo, openModal,} = React.useContext(TodoContext);

    return (
        <React.Fragment>
    <TodoCounter />
    
    <TodoSearch />
    
   
    <TodoList>
    {searchedTodos.map(todo => (
    <TodoItem 
        key={todo.text} 
        text={todo.text}
        completed= {todo.completed}
        onCompleted={() => completeTodo(todo.text)}
        onDeleted={() => deleteTodo(todo.text)}
    />
    ))}
    </TodoList>
    

    {!!openModal && (
         <Modal>
             <TodoForm />
         </Modal>
    )}

    <CreateTodoButton />
  
  </React.Fragment>
    )
}


export { AppUI };