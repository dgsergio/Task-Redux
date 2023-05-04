import React from 'react';
import { useDispatch } from 'react-redux';
import { delTask, selectTask } from '../store/index';

export default function Options({ id, showOptionsHandler }) {
  const dispatch = useDispatch();

  const deleteHandler = (id) => {
    dispatch(delTask(id));
  };
  const editHandler = (id) => {
    showOptionsHandler();
    dispatch(selectTask(id));
  };

  return (
    <>
      <div className="backdrop" onClick={showOptionsHandler} />
      <ul className="task-icon-opt">
        <li>
          <button onClick={() => editHandler(id)}>Edit</button>
        </li>
        <li>
          <button onClick={() => deleteHandler(id)}>Delete</button>
        </li>
      </ul>
    </>
  );
}
