import React from 'react';
import './SearchBar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
export default function SearchBar() {
  return (
    <div className="search-form">
      <form action="" className="">
        <button>
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </button>
        <input
          type="text"
          className="search-input"
          placeholder="Search For Musics, A rtists, Albumes ..."
        />
      </form>
    </div>
  );
}
