import './Circle.css';
export default function Circle({ current }: { current: boolean }) {
  return (
    <span className={current ? 'circle-btn pink' : 'circle-btn black'}></span>
  );
}
