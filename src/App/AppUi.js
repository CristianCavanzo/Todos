import React from 'react';
import { CreateTodoButton } from '../CreateTodoButton';
import { Modal } from '../modal';
import { TodoContext } from '../TodoContext';
import { TodoCounter } from '../TodoCounter';
import { TodoItem } from '../TodoItem';
import { TodoList } from '../TodoList';
import { TodoSearch } from '../TodoSearch';
import { TodoForm } from '../TodoForm';
import { EmptyTodos } from '../todoStates/EmptyTodos';
import { TodosError } from '../todoStates/TodosError';
import { TodosLoading } from '../todoStates/TodosLoading';

function AppUi() {
    const {
        loading,
        error,
        searchedTodos,
        completeTodo,
        deleteTodo,
        openModal,
        setOpenModal,
    } = React.useContext(TodoContext);
    return (
        <React.Fragment>
            <TodoCounter />
            <TodoSearch />

            <TodoList>
                {loading && <TodosLoading />}
                {error && <TodosError />}
                {!loading && !searchedTodos.lenght && <EmptyTodos />}
                {searchedTodos.map((todo) => (
                    <TodoItem
                        title={todo.text}
                        key={`${todo.text}_${todo.id}`}
                        completed={todo.completed}
                        onComplete={() => completeTodo(todo.text)}
                        onDelete={() => deleteTodo(todo.text)}
                    />
                ))}
            </TodoList>

            {openModal && (
                <Modal>
                    <TodoForm />
                </Modal>
            )}

            <CreateTodoButton
                setOpenModal={setOpenModal}
                openModal={openModal}
            />
        </React.Fragment>
    );
}

export { AppUi };
