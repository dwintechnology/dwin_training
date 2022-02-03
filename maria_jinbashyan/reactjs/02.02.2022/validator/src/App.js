import logo from './logo.svg';
import './App.css';
import Data from './Data/Data';
import Data2 from './Data/Data2';
import Text from './Data/Data1';

function App() {
  return (
    <div style={{maxWidth:"540px", margin:"auto"}}>
  <Data obj={Text}/>
      <Data2 />
   
   </div>
   
  );
}

export default App;
