import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { delRequest, editRequest, selectTask } from '../store/index';

export default function Options({ id, showOptionsHandler }) {
  const dispatch = useDispatch();
  const tasks = useSelector((state) => state.items);
  const task = tasks.find((e) => e.id === id);

  const completeHandler = (id) => {
    showOptionsHandler();
    dispatch(editRequest({ ...task, complete: !task.complete }, id));
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
          <button
            className={`${task.complete && 'line-through'}`}
            onClick={() => completeHandler(id)}
          >
            Complete
          </button>
        </li>
        {!task.complete && (
          <li>
            <button onClick={() => editHandler(id)}>Edit</button>
          </li>
        )}
        <li>
          <button onClick={() => dispatch(delRequest(id))}>Delete</button>
        </li>
      </ul>
    </>
  );
}
