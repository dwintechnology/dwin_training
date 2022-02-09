import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

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
            ? <div>Error: </div>
            : <div>Value: {state.value}</div>
        }
      </div>
    );
  };
    function useAsync(fun, destr){
      let [state, setState] = useState()
      let [loading, setLoading] = useState(true)
      let [error, setError] = useState(false)
      useEffect(() => {
                fun()
                .then((i) => { setState(i) })
                .catch((er)=>{ setError('error')})
              setLoading(false)
            }, destr)
            return {
              value: state,
              error,
              loading,
            }
    }
    return (
      <div>
        <Demo url="ttps://raw.githubusercontent.com/ajzbc/kanye.rest/master/quotes.json"/>
      </div>
    )
}

export default App;
