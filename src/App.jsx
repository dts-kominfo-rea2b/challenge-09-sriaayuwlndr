import './App.css';
import Contact from './components/Contact';

// Uncomment untuk memuat daftar kontak
import contacts from './data/contacts.json';

const App = () => {
  // Masukkan Header dan Contact ke dalam div App
  return (
    <div className="App">
      <Header/>
      <ul>
        {
          contacts.map((item) => {
            return <Contact props = {item}/>
          })
        }
      </ul>
    </div>
  );
}

export default App;
