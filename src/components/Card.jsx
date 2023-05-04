import React from 'react';
import fileSearch from '../assets/file-search.svg';

export default function Card({ title, description, date }) {
  const shortDesc =
    description.split(' ').length < 11
      ? description
      : description.split(' ', 11).join(' ') + ' ...';

  return (
    <div className="card">
      <div className="card-header">
        <div className="card-icon">
          <img src={fileSearch} alt="file search icon" />
        </div>
        <h3>{title}</h3>
      </div>
      <p className="card-icon-p_description">{shortDesc}</p>
      <p className="card-icon-p_date">{date}</p>
    </div>
  );
}
