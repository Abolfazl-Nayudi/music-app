import './App.css';
import Slider from './components/Slider/Slider';
import Header from './components/Header/Header';
import SideBar from './components/SideBar/SideBar';

function App() {
  return (
    <section className="website-parent">
      <div className="sidebar">
        <SideBar />
      </div>
      <div className="content">
        <Header />
        <Slider />
      </div>
    </section>
  );
}

export default App;
