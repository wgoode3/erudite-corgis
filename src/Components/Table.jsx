import React from 'react';


const Table = (props) => {

  return (
    <table className="table">
      <tbody>
        <tr>
          <th>Actions</th>
          <th>Title</th>
          <th>Author</th>
        </tr>
        {props.library.map( (book, i) => 
          <tr key={ i }>
            <td>
              { 
                book.isAvailable ? 
                <button 
                  className="button is-success"
                  onClick={ (e) => props.toggleAvailibity(i) }
                >
                  Available
                </button> : 
                <button 
                  className="button is-warning"
                  onClick={ (e) => props.toggleAvailibity(i) }
                >
                  Not Available
                </button> 
              }
              <button 
                className="button is-danger"
                onClick={ (e) => props.remove(i) }
              >
                &times;
              </button>
            </td>
            <td>{ book.title }</td>
            <td>{ book.author }</td>
          </tr>
        )}
      </tbody>
    </table>
  );

}

export default Table;