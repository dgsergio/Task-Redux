import React, { useState } from 'react';
import fileText from '../assets/file-text.svg';
import verticalDots from '../assets/vertical-dots.svg';
import Options from './Options';

export default function Task({ task }) {
  const [showOptions, setShowOptions] = useState(false);
  const showOptionsHandler = () => {
    setShowOptions((pV) => !pV);
  };

  return (
    <div className={`${task.complete ? 'task complete' : 'task'}`}>
      <div className="task-content">
        <div className="task-icon">
          <img src={fileText} alt="file task icon" />
        </div>
        <div className="task-info">
          <h3>{task.title}</h3>
          <p>{task.date}</p>
        </div>
      </div>
      {showOptions && (
        <Options id={task.id} showOptionsHandler={showOptionsHandler} />
      )}
      <button onClick={showOptionsHandler} className="task-icon-img_dots">
        <img src={verticalDots} alt="edit icon" />
      </button>
    </div>
  );
}
