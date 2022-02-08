import logo from './logo.svg';
import './App.css';

import { useEffect, useState } from 'react';

function App() {
  // const state = UseAS (async () => {
  //   const response = await fetch("https://raw.githubusercontent.com/ajzbc/kanye.rest/master/quotes.json");
  //   const result = await response.json();
  //   return result
  // })
  // return (
  //   <div>
  //     {state.value}
  //   </div>
  // );
  const fu = async () => {
    const response = await fetch("https://raw.githubusercontent.com/ajzbc/kanye.rest/master/quotes.json");
    const result = await response.json();
    return result
  }

  function UseAsync(fu, de) {
    let [state, setState] = useState()
    let [loading, setLoading] = useState(true)
    let [error, setError] = useState("")
    let k = fu()
    useEffect(() => {
     
      k.then((i) => { setState(i) })
      setLoading(false)
      // try {
      //   fu()
      // } catch (er) {
      //   setError(er.message)
      //   setLoading(true)
      // }
      // setLoading(false)
    
    }, de)
    // console.log(state)
    this.val = function(){
      return(
        <div>
          {state}
        </div>
      )
    }
    this.loading = function(){
      return loading
    }

}
let y = new UseAsync(fu, ["https://raw.githubusercontent.com/ajzbc/kanye.rest/master/quotes.json"])


return (
  <div>
    {y.loading()
        ? <div>Loading...</div>:y.val()}
  </div>
)
}

export default App;
