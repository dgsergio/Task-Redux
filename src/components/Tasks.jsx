import React from 'react';
import Task from './Task';
import { useDispatch, useSelector } from 'react-redux';
import { show } from '../store/index.js';

export default function Tasks() {
  const tasks = useSelector((state) => state.items);
  const showManageTask = useSelector((state) => state.showManageTask);
  const dispatch = useDispatch();
  const onClickHanlder = () => {
    dispatch(show());
  };

  return (
    <section className="all-tasks">
      <div className="all-tasks-header">
        <h2>All Tasks</h2>
        {!showManageTask && (
          <button onClick={onClickHanlder}>Add a new Task +</button>
        )}
      </div>
      {tasks?.map((task) => (
        <Task key={task.id} id={task.id} task={task} />
      ))}
    </section>
  );
}
