import React, { useState } from 'react';
import fileText from '../assets/file-text.svg';
import verticalDots from '../assets/vertical-dots.svg';
import Options from './Options';

export default function Task({ title, date, id }) {
  const [showOptions, setShowOptions] = useState(false);
  const showOptionsHandler = () => {
    setShowOptions((pV) => !pV);
  };

  return (
    <div className="task">
      <div className="task-content">
        <div className="task-icon">
          <img src={fileText} alt="file task icon" />
        </div>
        <h3>{title}</h3>
        <p>{date}</p>
      </div>
      {showOptions && (
        <Options id={id} showOptionsHandler={showOptionsHandler} />
      )}
      <button onClick={showOptionsHandler} className="task-icon-img_dots">
        <img src={verticalDots} alt="edit icon" />
      </button>
    </div>
  );
}
