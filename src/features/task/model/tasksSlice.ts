import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import type {
  IBaseTask,
  TaskEntity,
  TaskStatus,
} from '@src/features/task/model/types.ts';

interface TasksState {
  items: TaskEntity[];
}

const initialState: TasksState = {
  items: [
    {
      id: '1',
      category: 'designSystem',
      title: 'Hero section',
      text: 'Create a design system for a hero section in 2 different variants. Create a simple presentation with these components.',
      status: 'todo',
    },
    {
      id: '2',
      category: 'typography',
      title: 'Typography change',
      text: 'Modify typography and styling of text placed on 6 screens of the website design. Prepare a documentation.',
      status: 'todo',
    },
    {
      id: '3',
      category: 'development',
      title: 'Implement design screens',
      text: 'Our designers created 6 screens for a website that needs to be implemented by our dev team.',
      status: 'inProgress',
    },
    {
      id: '4',
      category: 'development',
      title: 'Fix bugs in the CSS code',
      text: 'Fix small bugs that are essential to prepare for the next release that will happen this quarter.',
      status: 'done',
    },
    {
      id: '5',
      category: 'typography',
      title: 'Proofread final text',
      text: 'The text provided by marketing department needs to be proofread so that we make sure that it fits into our design.',
      status: 'done',
    },
    {
      id: '6',
      category: 'designSystem',
      title: 'Responsive design',
      text: 'All designs need to be responsive. The requirement is that it fits all web and mobile screens.',
      status: 'done',
    },
  ],
};

const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    addTask(state, action: PayloadAction<IBaseTask>) {
      state.items.push({
        id: Date.now().toString(),
        ...action.payload,
      });
    },
    deleteTask(state, action: PayloadAction<{ id: string }>) {
      const index = state.items.findIndex(
        (task) => task.id === action.payload.id,
      );
      if (index !== -1) {
        state.items.splice(index, 1);
      }
    },
    deleteAllStatusTasks(state, action: PayloadAction<{ status: TaskStatus }>) {
      state.items = [
        ...state.items.filter((task) => task.status !== action.payload.status),
      ];
    },
    updateTaskStatus(
      state,
      action: PayloadAction<{ id: string; status: TaskStatus }>,
    ) {
      const index = state.items.findIndex(
        (task) => task.id === action.payload.id,
      );
      if (index !== -1) {
        const deletedItem = { ...state.items.splice(index, 1)[0] };
        deletedItem.status = action.payload.status;
        state.items.push(deletedItem);
      }
    },
  },
});

export const { addTask, deleteTask, deleteAllStatusTasks, updateTaskStatus } =
  tasksSlice.actions;
export default tasksSlice.reducer;
