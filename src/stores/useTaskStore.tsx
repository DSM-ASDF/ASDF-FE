import { create } from 'zustand';
import { TaskType, TodoType, TaskDummy } from '../utils/dummy/TaskDummy';
import { TeamMemberType } from '../utils/dummy/TeamDummy';
import { MajorType, WorkAreaType, PriorityType } from '../utils/Data/Task';

interface TaskStore {
  tasks: TaskType[];
  selectedTodoId: number | null;
  setTasks: (newTasks: TaskType[]) => void;
  setSelectedTodoId: (todoId: number) => void
  deleteTask: (todoId: number) => void;
  setTodo: (todo: Partial<TodoType>) => void;
  createTodo: (todo: TodoType, date: string) => void;

  selectedLabel: MajorType;
  selectedWorkArea: WorkAreaType;
  selectedPriority: PriorityType;
  selectedManager: TeamMemberType | null;
  setSelectedLabel: (label: MajorType) => void;
  setSelectedWorkArea: (workArea: WorkAreaType) => void;
  setSelectedPriority: (priority: PriorityType) => void;
  setSelectedManager: (manager: TeamMemberType | null) => void;

  addComment: (todoId: number, userId: string) => void;
  deleteComment: (todoId: number, commentIndex: number) => void;
}

export const useTaskStore = create<TaskStore>((set) => ({
  tasks: [],
  selectedTodoId: null,

  setTasks: (newTasks) => set({ tasks: newTasks }),

  setSelectedTodoId: (todoId: number) => set({ selectedTodoId: todoId }),

  deleteTask: (todoId) =>
    set((state) => {
      const updatedTasks = state.tasks
        .map((task) => ({
          ...task,
          todo: task.todo.filter((todo) => todo.todoId !== todoId),
        }))
        .filter((task) => task.todo.length > 0);

      return { tasks: updatedTasks };
    }),

  setTodo: (todo) =>
    set((state) => ({
      tasks: state.tasks.map((task) => ({
        ...task,
        todo: task.todo.map((t) =>
          t.todoId === todo.todoId ? { ...t, ...todo } : t
        ),
      })),
    })),

  createTodo: (todo, date) =>
    set((state) => {
      const existingDateTask = state.tasks.find((task) => task.date === date);
      if (existingDateTask) {
        return {
          tasks: state.tasks.map((task) =>
            task.date === date ? { ...task, todo: [...task.todo, todo] } : task
          ),
        };
      } else {
        return {
          tasks: [...state.tasks, { date, schedule: [], todo: [todo] }],
        };
      }
    }),

  selectedLabel: "",
  selectedWorkArea: "",
  selectedPriority: "",
  selectedManager: null,
  setSelectedLabel: (label) => set({ selectedLabel: label }),
  setSelectedWorkArea: (workArea) => set({ selectedWorkArea: workArea }),
  setSelectedPriority: (priority) => set({ selectedPriority: priority }),
  setSelectedManager: (manager) => set({ selectedManager: manager }),

  addComment: (todoId, content) =>
    set((state) => {
      const updatedTasks = state.tasks.map((task) => ({
        ...task,
        todo: task.todo.map((t) =>
          t.todoId === todoId
            ? {
              ...t,
              comment: [
                ...t.comment,
                {
                  commentId: Date.now(),
                  profile: "https://www.urbanbrush.net/web/wp-content/uploads/edd/2023/02/urban-20230228144115810458.jpg",
                  userId: "유저이름",
                  commentDate: "지금",
                  commentContent: content,
                },
              ],
            }
            : t
        ),
      }));
      return { tasks: updatedTasks };
    }),

  deleteComment: (todoId, commentIndex) =>
    set((state) => {
      const updatedTasks = state.tasks.map((task) => ({
        ...task,
        todo: task.todo.map((t) =>
          t.todoId === todoId
            ? {
              ...t,
              comments: t.comment.filter((_, index) => index !== commentIndex),
            }
            : t
        ),
      }));
      return { tasks: updatedTasks };
    }),
}));

export const initializeTasks = () => {
  const setTasks = useTaskStore.getState().setTasks;
  setTasks(TaskDummy);
};