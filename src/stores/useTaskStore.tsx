import { create } from 'zustand';
import { TaskType, TaskDummy } from '../utils/dummy/TaskDummy';

interface TaskStore {
  tasks: TaskType[];
  setTasks: (newTasks: TaskType[]) => void;
  deleteTask: (todoId: number) => void;
}

export const useTaskStore = create<TaskStore>((set) => ({
  tasks: [],
  setTasks: (newTasks) => set({ tasks: newTasks }),
  deleteTask: (todoId: number) => set((state) => {
    const updatedTasks = state.tasks.map((task) => ({
      ...task,
      todo: task.todo.filter((todo) => todo.todoId !== todoId),
    }));
    console.log(updatedTasks);
    return { tasks: updatedTasks };
  }),
}));

export const initializeTasks = () => {
  const setTasks = useTaskStore.getState().setTasks;
  setTasks(TaskDummy);
};