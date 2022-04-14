import React from 'react';
import { TodoContext } from '../TodoContext';
import './TodoSearch.css';

function TodoSearch() {
    const { searchValue, setSearchValue } = React.useContext(TodoContext);
    const onSearch = (e) => {
        setSearchValue(e.target.value);
    };
    return (
        <input
            className="TodoSearch"
            type="text"
            placeholder="cebolla"
            onChange={(e) => onSearch(e)}
            value={searchValue}
        />
        // <p>{searchValue}</p>
    );
}

export { TodoSearch };
