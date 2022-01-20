import { useState } from 'react';
import './css/App.css';
import Forms from './components/Forms';
import ListBooks from './components/ListBooks';

function App() {
  const [books, setBooks] = useState([]);
  const [book, setBook] = useState({});

  const removeBook = (removedBook) => {
    const newList = books.filter((item) => item !== removedBook)
    setBooks([...newList]);
  }
  
  return (
    <div className="App">
      <Forms createBook={setBook} />
   
      <button 
        onClick={() => setBooks([...books, book])}
      >
        Salvar
      </button>

      { books.length > 0 && <ListBooks remove={removeBook} listBooks={books} />}
    </div>
  );
}

export default App;
