import {useState} from 'react'
import Level2 from './components/level2';

function App() {
  let [value1,setValue1] = useState();
  let [value2,setValue2] = useState();
  let [value3,setValue3] = useState();
  let [value4,setValue4] = useState();
  let [value5,setValue5] = useState();

  return (
    <div className="App">
      <input type="text" placeholder='input1' value={value1} onChange={(e)=>setValue1(e.target.value)}/>
      <input type="text" placeholder='input2' value={value2} onChange={(e)=>setValue2(e.target.value)}/>
      <input type="text" placeholder='input3' value={value3} onChange={(e)=>setValue3(e.target.value)}/>
      <input type="text" placeholder='input4' value={value4} onChange={(e)=>setValue4(e.target.value)}/>
      <input type="text" placeholder='input5' value={value5} onChange={(e)=>setValue5(e.target.value)}/>
      <Level2 value1={value1} value2={value2} value3={value3} value4={value4} value5={value5}
      setValue1={setValue1} setValue2={setValue2} setValue3={setValue3} setValue4={setValue4} setValue5={setValue5}
      /> 
    </div>
  );
}

export default App;
