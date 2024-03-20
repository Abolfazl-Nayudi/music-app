import React from 'react';
import SideBar from '../../components/SideBar/SideBar';
import Header from '../../components/Header/Header';
import Slider from '../../components/Slider/Slider';
import './Home.css';
export default function Home() {
  return (
    <section className="website-parent">
      <SideBar />
      <div className="content">
        <Header />
        <Slider />
      </div>
    </section>
  );
}
