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
      <div className="message-header">
        <p>Add a Book</p>
      </div>
      <div className="message-body">
        <form onSubmit={ addBook }>
          <div className="field">
            <label>Title:</label>
            <input 
              type="text" 
              className="input" 
              onChange={ (e) => setTitle(e.target.value) } 
              value={ title }
            />
          </div>
          <div className="field">
            <label>Author:</label>
            <input 
              type="text" 
              className="input" 
              onChange={ (e) => setAuthor(e.target.value) } 
              value={ author }
            />
          </div>
          <input type="submit" className="button is-danger" value="Add Book" />
        </form>
      </div>
    </div>
  );
}

export default Form;