import logo from './logo.svg';
import './App.css';

function App() {
  function but(){
    alert ("Нажато!")
  }
  return (
    <div style={{margin:"auto", marginLeft:"700px", padding:"150px"}}>
      <button onClick={but}>Button</button>
    </div>
  );
}

export default App;
