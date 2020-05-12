import React, { useState } from 'react';

const Form = (props) => {

  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");

  const addBook = (e) => {
    e.preventDefault();
    const newBook = {title, author, isAvailable: true};
    props.create( newBook );
    setTitle("");
    setAuthor("");
  }

  return (
    <div className="message is-danger">
      <form onSubmit={ addBook }>
        <label>Title:</label>
        <input 
          type="text" 
          className="input" 
          onChange={ (e) => setTitle(e.target.value) } 
          value={ title }
        />
        <label>Author:</label>
        <input 
          type="text" 
          className="input" 
          onChange={ (e) => setAuthor(e.target.value) } 
          value={ author }
        />
        <input type="submit" className="button is-danger" value="Add Book" />
      </form>
    </div>
  );
}

export default Form;