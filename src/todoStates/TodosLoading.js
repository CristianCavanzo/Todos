import React from 'react';
import './TodosLoading.css';

function TodosLoading(props) {
    return (
        <div className="LoadingTodo-container">
            <span className="LoadingTodo-completeIcon"></span>
            <p className="LoadingTodo-text">Cargando TODOs...</p>
            <div className="LoadingTodo-deleteIcon"></div>
        </div>
    );
}

export { TodosLoading };
