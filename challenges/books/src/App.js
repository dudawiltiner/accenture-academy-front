import './css/App.css';
import Forms from './components/Forms';
import ListBooks from './components/ListBooks';
import useApp from './hooks/useApp';

function App() {
  const {setBook, saveBook, removeBook, books} = useApp()
  
  return (
    <div className="App">
      <p className="title">Accenture Books</p>

      <Forms createBook={setBook} save={saveBook} />

      { books.length > 0 && <ListBooks remove={removeBook} listBooks={books} />}
    </div>
  );
}

export default App;
