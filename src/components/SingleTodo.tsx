import React from 'react';
import {Todo} from '../model';
import './styles.css';

type Props = {
    todo: Todo,
    todos: Todo[],
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>
}

const SingleTodo = ({todo, todos, setTodos}:Props) => {
    return (
        <div>
            {todo.todo}
        </div>
    );
};

export default SingleTodo;
