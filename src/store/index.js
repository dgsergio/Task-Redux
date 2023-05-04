import { createSlice, configureStore } from '@reduxjs/toolkit';

const tasksSlice = createSlice({
  name: 'tasks',
  initialState: {
    items: [],
    itemSelected: {},
    showManageTask: false,
  },
  reducers: {
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
} = tasksSlice.actions;

export const store = configureStore({
  reducer: tasksSlice.reducer,
});
