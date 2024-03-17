import './App.css';
import Slider from './components/Slider/Slider';
import Header from './components/Header/Header';

function App() {
  return (
    <section className="website-parent">
      <div className="sidebar"></div>
      <div className="content">
        <Header />
        <Slider />
      </div>
    </section>
  );
}

export default App;
