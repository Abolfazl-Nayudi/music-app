import React from 'react';
import './Description.css';

export default function Description({ name }: { name: string }) {
  return (
    <div className="description">
      <h2>{name}</h2>
      <p>
        You can have easy access to every song of {name} by just clicking on the
        <span style={{ color: '#EE10B0' }}>Listen now</span> botton. You can
        also <span style={{ color: '#0E9EEF' }}>follow</span> him too for
        suppurting him and keeping it up with what he dose.
      </p>
      <div>
        <button className="listen-btn">Listen Now</button>
        <button className="follow-btn">Follow</button>
      </div>
    </div>
  );
}
