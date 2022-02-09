import './App.css';
// import { Header } from './New/Items'
import React, { useState, useEffect } from 'react';
import { useFetch } from './New/Items'


function App() {
  
  const { data, loading, error } = useFetch('https://raw.githubusercontent.com/ajzbc/kanye.rest/master/quotes.json',{});
  if (loading) return "Loading......";
  if (error) {
    console.log(error)
    return null;
  }
  function refresh(){
  
  }

  return (
    <div className="App">
      <div>
        {/* <button onClick = {}>Refresh</button> */}
      </div>
      {data}
    </div>
  );
}

export default App;
