import logo from './logo.svg';
import './App.css';

function App() {
  let mass = ['dog', 'cat', 'chicken', 'cow', 'sheep', 'horse'];
  let mass2 = mass.map((animal) => {

    return (

      <li>{animal}</li>

    )
  })
return(
  <div>
    {mass2}
  </div>
)
}


export default App
