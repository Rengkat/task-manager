import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  isHideForm: false,
  taskDesc: "",
  date: "",
  time: "",
  user: "",
  taskTitle: "",
  isEditing: false,
  editID: null,
  isCompleted: false,
  data: [],
};

const taskSlice = createSlice({
  name: "task",
  initialState,
  reducers: {
    addTaskDesc(state, action) {
      state.taskDesc = action.payload;
    },
    addDate(state, action) {
      state.date = action.payload;
    },
    addTime(state, action) {
      state.time = action.payload;
    },
    addUser(state, action) {
      state.user = action.payload;
    },

    addPersonData(state, action) {
      state.data.push(action.payload);
    },
    showForm(state) {
      state.isHideForm = !state.isHideForm;
    },
    editItem(state, action) {
      const specificItem = state.data.find(
        (item) => item.id === action.payload
      );
      state.isEditing = true;
      state.editID = action.payload;
      state.taskDesc = specificItem.taskDesc;
    },
    completed(state, action) {
      // state.isCompleted = !state.isCompleted;
      let newTask = state.data.find((task) => task.id === action.payload);
      newTask.isCompleted = !newTask.isCompleted;
    },
    deletTask(state, action) {
      const deletedTask = state.data.filter(
        (item) => item.id !== action.payload
      );

      state.data = deletedTask;
    },
  },
});

export default taskSlice.reducer;
export const {
  addDate,
  addTaskDesc,
  addUser,
  addTime,
  addPersonData,
  showForm,
  editItem,
  completed,
  deletTask,
} = taskSlice.actions;
