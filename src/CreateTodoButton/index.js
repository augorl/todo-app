import React from 'react';
import { TodoContext } from '../TodoContext';
import './CreateTodoButton.css';


function CreateTodoButton (props) {
    const { setOpenModal} = React.useContext(TodoContext);
    const buttomToggle = () => {
        setOpenModal(prevState => !prevState);
    }
        
    return (
        <button 
            className="CreateTodoButton"
            onClick={buttomToggle}
        >
            +
        </button>
    );
}


export { CreateTodoButton };