import React from 'react';
import './search-box.scss';

export const SearchBox = ({ placeholder, handleChange }) => (
    <input 
    type='search' 
    placeholder={placeholder}
    onChange={handleChange}/>
);