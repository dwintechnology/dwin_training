import './App.css';
import Search from './components/search';
import Counter from './components/counter';
import Acardion from './components/acardion';
import Slider from './components/slider';
import SliderSlow from './components/sliderSlow';
import LoginForm from './components/loginForm';
import CheckList from './components/checkList';
import CheckListAll from './components/checkListAll';
import Header from './components/header';
import { Route, Routes } from 'react-router-dom';

function App() {

  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path='/Counter' element={<Counter/>}/>
        <Route path='/' element={<SliderSlow/>}/>
        <Route path='/LoginForm' element={<LoginForm/>}/>
        <Route path='/Slider' element={<Slider/>}/>
        <Route path='/Acardion' element={<Acardion number={4}/>}/>
        <Route path='/CheckList' element={<CheckList/>}/>
        <Route path='/CheckListAll' element={<CheckListAll/>}/>
        <Route path='/Search' element={<Search/>}/>
        <Route path='*' element={<h1>404 NOT FOUND</h1>}/>
      </Routes> 
    </div>
  );
}

export default App;
