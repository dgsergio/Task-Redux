import { useDispatch, useSelector } from 'react-redux';
import { toggle, addRequest, editRequest } from '../store/index';

export default function NewTask() {
  const dispatch = useDispatch();
  const itemSelected = useSelector((state) => state.itemSelected);

  const cancelHandler = () => {
    dispatch(toggle());
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const now = new Date();
    const months = [
      'Jan',
      'Feb',
      'Mar',
      'Apr',
      'May',
      'June',
      'July',
      'Aug',
      'Sept',
      'Oct',
      'Nov',
      'Dec',
    ];
    const task = {
      title: e.target.title.value,
      description: e.target.description.value,
      date: `${months[now.getMonth()]} ${now.getDay()}, ${now.getFullYear()}`,
      completed: false,
    };

    if (itemSelected.id) {
      dispatch(editRequest(task, itemSelected.id));
      return;
    }

    dispatch(addRequest(task));
  };

  return (
    <section className="new-task">
      <h2>{!itemSelected.id ? 'New ' : 'Edit '} Task</h2>
      <form onSubmit={submitHandler} className="new-task-form">
        <label htmlFor="title" name="title">
          Title
        </label>
        <input
          id="title"
          type="text"
          placeholder="Buy a new notebook..."
          defaultValue={itemSelected.title}
        />
        <label htmlFor="description">Description</label>
        <textarea
          id="description"
          name="description"
          cols="30"
          rows="5"
          placeholder="Find a good one on sale..."
          defaultValue={itemSelected.description}
        ></textarea>
        <div className="new-task-footer">
          <button
            className="new-task-footer-btn_cancel"
            onClick={cancelHandler}
            type="button"
          >
            Cancel
          </button>
          <button className="new-task-footer-btn_submit" type="submit">
            Submit
          </button>
        </div>
      </form>
    </section>
  );
}
