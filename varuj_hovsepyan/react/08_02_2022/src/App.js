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
  // const fu = async () => {
  //   const response = await fetch("https://raw.githubusercontent.com/ajzbc/kanye.rest/master/quotes.json");
  //   const result = await response.json();
  //   return result
  // }
  // const Demo = () => {
  //   let [loading, setLoading] = useState(false);
  //   const a = useAsync(async () => {
  //     const response = await fetch(url);
  //     const result = await response.json();
  //     return result
  //   }, [url]);
    
//   function useAsync(fu, de) {
//     let [state, setState] = useState()
//     let [loading, setLoading] = useState(true)
//     let [error, setError] = useState("")
//     let k = fu()
//     useEffect(() => {
     
//       k.then((i) => { setState(i) })
//       setLoading(false)
//       // try {
//       //   fu()
//       // } catch (er) {
//       //   setError(er.message)
//       //   setLoading(true)
//       // }
//       // setLoading(false)
    
//     }, de)
//     // console.log(state)
//     this.val = function(){
//       return(
//         <div>
//           {state}
//         </div>
//       )
//     }
//     this.loading = function(){
//       return loading
//     }

// }
// let y = new useAsync(fu, ["https://raw.githubusercontent.com/ajzbc/kanye.rest/master/quotes.json"])
// return (
//   <div>
//     {y.loading()
//         ? <div>Loading...</div>:y.val()}
//   </div>
// )
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
  function useAsync(fu, de){
   
    let [state, setState] = useState()
    let [loading, setLoading] = useState(true)
    let [error, setError] = useState(false)
    
    useEffect(() => {
      
            
             
              fu()
              .then((i) => { setState(i) })
              .catch((er)=>{ setError('er')})
            setLoading(false)
          }, de)
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
