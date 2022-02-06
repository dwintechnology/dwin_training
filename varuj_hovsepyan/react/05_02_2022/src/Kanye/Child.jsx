import {
    BrowserRouter as Router, Route, Link, Routes
  } from 'react-router-dom';
import { useFetch } from '../hooks/useFetch';
  import Childimg from './Childimg';
function Child(){
  const data = useFetch("https://raw.githubusercontent.com/ajzbc/kanye.rest/master/quotes.json")
 data && console.log(data);
  return(
    
      <>
      <div>
        
      <button style={{marginLeft:"50px"}}>
    <a href='/child/childimg' style={{textDecoration:"none", color:"orange"}}>Child</a>
    </button> 
      </div>
      
      <Routes>
        // <Route  path="/child/childimg" element={<Childimg/>}/>
      </Routes>
      </>
   
  )
}
export default Child