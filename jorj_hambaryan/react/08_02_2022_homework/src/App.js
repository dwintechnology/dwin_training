import { useState } from 'react';
import './App.css';
import useAsync from './useAsync'


function App() {

  const Demo = ({url}) => {
    const state = useAsync(async () => {
      const response = await fetch(url);
      const result = await response.json();
      return result
    }, [url]);
  
    return (
      <div>
        {state.loading
          ? <div>Loading...</div>
          : state.error
            ? <div>Error: {state.error.message}</div>
            : <div>Value: {state.value}</div>
        }
      </div>
    );
  };



// REFRESH
function refresh(){
  document.location.reload(true)
}
// REFRESH
const [value,setValue] = useState(1)
function refresh2(){
  setValue(value + 1);
  console.log(value)
}

// REFRESH


  return (
    <div className="App">
        <Demo url="https://raw.githubusercontent.com/ajzbc/kanye.rest/master/quotes.json" />
        <button onClick={refresh2}>Refrech</button>
    </div>
  );
}

export default App;
