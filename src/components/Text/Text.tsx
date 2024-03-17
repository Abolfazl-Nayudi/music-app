import React from 'react';
import './Text.css';
export default function Text({ word }: { word: string }) {
  return <span className="text">{word}</span>;
}
