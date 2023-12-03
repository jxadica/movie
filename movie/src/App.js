
import './App.css';
import Header from './Header/Header';
import Main from './Main/Main';
import Side from './Side/Side';
function App() {
  return (
    <div className="App">
   <header><Header /></header>
   <div className='section'>
    <Main />
    <Side/>
   </div>
    </div>
  );
}

export default App;
