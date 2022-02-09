import './App.css';
import Search from './components/search';
import Counter from './components/counter';
import Acardion from './components/acardion';
import Slider from './components/slider';
import SliderSlow from './components/sliderSlow';
import LoginForm from './components/loginForm';

function App() {

  return (
    <div className="App">
      <Search/>
      <Counter/>
      <Acardion number={4}/>
      <Slider/>
      <h1>Slow Slider</h1>
      <SliderSlow/>
      <LoginForm/>
    </div>
  );
}

export default App;
