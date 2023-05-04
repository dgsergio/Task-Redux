import { createSlice, configureStore } from '@reduxjs/toolkit';

const tasksSlice = createSlice({
  name: 'tasks',
  initialState: {
    items: [],
    itemSelected: {},
    showManageTask: false,
    loading: false,
    error: '',
  },
  reducers: {
    handleLoading(state, action) {
      state.loading = action.payload;
    },
    handleError(state, action) {
      state.error = action.payload;
    },
    populate(state, action) {
      state.items = action.payload;
    },
    toggle(state) {
      state.showManageTask = !state.showManageTask;
    },
    show(state) {
      state.itemSelected = {};
      state.showManageTask = true;
    },
    addTask(state, action) {
      state.items.unshift(action.payload);
      state.showManageTask = false;
    },
    editTask(state, action) {
      state.items = state.items.map((task) =>
        task.id === action.payload.id ? action.payload : task
      );
      state.showManageTask = false;
    },
    selectTask(state, action) {
      state.itemSelected = state.items.find((e) => e.id === action.payload);
      state.showManageTask = true;
    },
    delTask(state, action) {
      state.items = state.items.filter((task) => task.id !== action.payload);
    },
  },
});

export const {
  populate,
  toggle,
  addTask,
  delTask,
  selectTask,
  show,
  editTask,
  handleError,
  handleLoading,
} = tasksSlice.actions;

export const addRequest = (task) => {
  return async (dispatch) => {
    dispatch(handleLoading(true));
    dispatch(handleError(''));
    try {
      const response = await fetch(
        import.meta.env.VITE_FIREBASE_URL + 'tasks.json',
        {
          method: 'POST',
          body: JSON.stringify(task),
          Headers: { 'Content-Type': 'application/json' },
        }
      );
      if (!response.ok) throw new Error('Fail to post the request.');
      const data = await response.json();
      dispatch(addTask({ ...task, id: data.name }));
    } catch (err) {
      dispatch(handleError('Error: ' + err.message));
    }
    dispatch(handleLoading(false));
  };
};

export const editRequest = (task, id) => {
  return async (dispatch) => {
    dispatch(handleLoading(true));
    dispatch(handleError(''));
    try {
      const response = await fetch(
        import.meta.env.VITE_FIREBASE_URL + 'tasks/' + id + '/.json',
        {
          method: 'PATCH',
          body: JSON.stringify(task),
          Headers: { 'Content-Type': 'application/json' },
        }
      );
      if (!response.ok) throw new Error('Fail to update.');
      dispatch(editTask({ ...task, id }));
    } catch (err) {
      dispatch(handleError('Error: ' + err.message));
    }
    dispatch(handleLoading(false));
  };
};

export const delRequest = (id) => {
  return async (dispatch) => {
    dispatch(handleLoading(true));
    dispatch(handleError(''));
    try {
      const response = await fetch(
        import.meta.env.VITE_FIREBASE_URL + 'tasks/' + id + '/.json',
        {
          method: 'DELETE',
        }
      );
      if (!response.ok) throw new Error('Fail to delete the item.');
      dispatch(delTask(id));
    } catch (err) {
      dispatch(handleError('Error: ' + err.message));
    }
    dispatch(handleLoading(false));
  };
};

export const getRequest = (transformData) => {
  return async (dispatch) => {
    dispatch(handleLoading(true));
    dispatch(handleError(''));
    try {
      const response = await fetch(
        import.meta.env.VITE_FIREBASE_URL + 'tasks.json'
      );
      if (!response.ok) throw new Error('Fail to delete the item.');
      const data = await response.json();
      const tasks = transformData(data);
      dispatch(populate(tasks.reverse()));
    } catch (err) {
      dispatch(handleError('Error: ' + err.message));
    }
    dispatch(handleLoading(false));
  };
};

export const store = configureStore({
  reducer: tasksSlice.reducer,
});
