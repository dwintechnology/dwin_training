import './App.css';
import { useState } from "react";

function App(props) {
  const [state, setState] = useState(0)

  return (
    <div style={{ margin: "auto", marginLeft: "700px", padding: "150px" }}>

      <h1>
        Button hes been cliked: {state} time!
      </h1>
      <button onClick={() => setState(state + 1)}>cliked</button>
      
    </div>
  );
}

export default App;
