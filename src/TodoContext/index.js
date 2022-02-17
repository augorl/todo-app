import React from "react";
import { useLocalStorage } from "./useLocalStorage";

const TodoContext = React.createContext();


function TodoProvider(props) {
   
  // Declaramos nuestros estados
  const [todos, saveTodos] = useLocalStorage('TODOS_V1', []);
  const [searchValue, setSearchValue] = React.useState('');
  const [openModal, setOpenModal] = React.useState(false);

  // Variables para contar ToDos
  const completedTodos = todos.filter(todo => !!todo.completed).length;
  const totalTodos = todos.length;
 
  // logica de busqueda
  let searchedTodos = [];
  if (!searchValue >= 1) {
    searchedTodos = todos;
  } else {
    searchedTodos = todos.filter(todo => {
      const todoText = todo.text.toLowerCase();
      const searchText = searchValue.toLowerCase();

      return todoText.includes(searchText);

    });
  }

  // Completar, agregar y Eliminar ToDos
  const completeTodo = (text) => {
    const todoIndex = todos.findIndex(todo => todo.text === text);
    const newTodos = [...todos];
    if (!newTodos[todoIndex].completed === true) {
      newTodos[todoIndex].completed = true;
    } else {newTodos[todoIndex].completed = false;}
    saveTodos(newTodos);
  }
  
  const deleteTodo = (text) => {
    const todoIndex = todos.findIndex(todo => todo.text === text);
    const newTodos = [...todos];
    newTodos.splice(todoIndex, 1);
    saveTodos(newTodos); 
  }

  const addTodo = (text) => {
    const newTodos = [...todos];
    newTodos.push({
      completed:false,
      text,

    });
    saveTodos(newTodos); 
  }
   
   
    return(
        <TodoContext.Provider value={{
            
                totalTodos,
                completedTodos,
                searchValue,
                setSearchValue,
                searchedTodos,
                completeTodo,
                deleteTodo,
                addTodo,
                openModal,
                setOpenModal,
              }
        }>
            {props.children}
        </TodoContext.Provider>
    );
}

export { TodoContext, TodoProvider }; 
