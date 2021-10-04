import React from 'react';
import './search-box.styles.css';

// use a functional component here instead of a class component
// - a functional component does not have a constructor or lifecycle methods or state
// - a functional component should only be used to render a component
// - a functional component is a component that just gets some props and returns 
//   some html
export const SearchBox = ({ placeholder, handleChange }) => (

    <input  className="search"
            type="search" 
            placeholder= { placeholder } 
            onChange = { handleChange } />

);
