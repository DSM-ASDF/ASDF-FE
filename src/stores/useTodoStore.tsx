import { create } from "zustand"
import { TodoType } from "../utils/dummy/TaskDummy"

interface TodoState {
  todo: TodoType;
  setTodo: (todo: Partial<TodoType>) => void;
}

export const useTodoStore = create<TodoState>((set) => ({
  todo: {
    todoId: 0,
    title: "",
    taskOwner: { profile: "", userId: "" },
    label: "",
    workArea: "",
    priority: "",
    description: "",
    progress: false,
    comment: [],
  },
  setTodo: (todo) =>
    set((state) => ({
      todo: { ...state.todo, ...todo },
    })),
}));