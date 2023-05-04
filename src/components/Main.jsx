import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getRequest } from '../store/index';
import Tasks from './Tasks';
import Cards from './Cards';
import searchIcon from '../assets/search.svg';
import closeX from '../assets/close-x.svg';
import NewTask from './NewTask';

export default function Main() {
  const [searchResult, setSerachResoult] = useState(null);
  const [query, setQuery] = useState('');
  const dispatch = useDispatch();
  const tasks = useSelector((state) => state.items);
  const showManageTask = useSelector((state) => state.showManageTask);
  const loading = useSelector((state) => state.loading);
  const error = useSelector((state) => state.error);
  const inputRef = useRef();
  const debounceRef = useRef();

  const transformData = (data) => {
    let newData = [];
    for (let item in data) {
      newData.push({ id: item, ...data[item] });
    }
    return newData;
  };

  useEffect(() => {
    dispatch(getRequest(transformData));
  }, [dispatch]);

  useEffect(() => {
    if (!query) {
      setSerachResoult(null);
      return;
    }
    const newArray = tasks.filter(
      (task) =>
        task.title.toLowerCase().includes(query) ||
        task.description.toLowerCase().includes(query)
    );
    setSerachResoult(newArray);
  }, [query]);

  const searchHandler = (e) => {
    if (debounceRef.current) clearTimeout(debounceRef.current);
    debounceRef.current = setTimeout(() => {
      setQuery(e.target.value.toLowerCase());
    }, 400);
  };

  const onClearQuery = () => {
    inputRef.current.value = '';
    setSerachResoult(null);
  };

  return (
    <main>
      <form className="search-field">
        <input
          onChange={searchHandler}
          type="text"
          placeholder="Search for a task..."
          ref={inputRef}
        />
        {!query ? (
          <img className="input-icon" src={searchIcon} alt="search icon" />
        ) : (
          <button onClick={onClearQuery} className="input-icon">
            <img src={closeX} alt="Delete query icon" />
          </button>
        )}
      </form>
      <Cards tasks={searchResult} />
      {loading && <div className="message">Loading...</div>}
      {error && <div className="message error">{error}</div>}
      {showManageTask && <NewTask />}
      <Tasks />
    </main>
  );
}
