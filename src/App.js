import React, { useState } from 'react';
import Table from './Components/Table';
import Form from './Components/Form';

function App() {

  const [library, setLibrary] = useState([
    {title: "Green Eggs and Ham", author: "Dr. Seuss", isAvailable: true},
    {title: "Where the Wild Things Are", author: "Maurice Sendak", isAvailable: false}
  ]);

  const toggleAvailibity = (i) => {
    const temp = [ ...library ];
    temp[i].isAvailable = !temp[i].isAvailable;
    setLibrary( temp );
  }

  const remove = (i) => {
    const temp = [ ...library ];
    temp.splice(i, 1);
    setLibrary( temp );
  }

  const addBookToLibrary = (book) => {
    const temp = [ ...library ];
    temp.push( book );
    setLibrary( temp );
  }

  return (
    <div className="container">
      <section className="hero is-primary">
        <div className="hero-body">
          <h1 className="title">Library</h1>
        </div>
      </section>
      <br /><br />
      <div className="columns">
        <div className="column">
          <Form create={ addBookToLibrary } />
        </div>
        <div className="column">
          <Table 
            library={library} 
            toggleAvailibity={ toggleAvailibity }
            remove={ remove }
          />
        </div>
      </div>
    </div>
  );
}

export default App;