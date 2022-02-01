import React from 'react';
import ReactDOM from 'react-dom';

function Foo(){
  return <h1>Hello World</h1>
}
ReactDOM.render(<Foo/>, document.getElementById('root'))
// ReactDOM.render(
//   <h1>Привет, мир!</h1>,
//   document.getElementById('root')
// );