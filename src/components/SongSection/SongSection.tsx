import CardList from '../Card/CardList/CardList';
import ViewAll from '../ViewAll/ViewAll';
import './SongSection.css';
export default function SongSection() {
  return (
    <section className="top-song-section">
      <div>
        <h2>
          Top <span style={{ color: '#EE10B0' }}>Songs</span>
        </h2>
        <div>
          <CardList />
          <ViewAll />
        </div>
      </div>
    </section>
  );
}
