import './Home.css';
import SideBar from '../../components/SideBar/SideBar';
import Header from '../../components/Header/Header';
import Slider from '../../components/Slider/Slider';
import SongSection from '../../components/SongSection/SongSection';
export default function Home() {
  return (
    <section className="website-parent">
      <SideBar />
      <div className="content">
        <Header />
        <Slider />
        <SongSection />
      </div>
    </section>
  );
}
