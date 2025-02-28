import { create } from 'zustand'
import { MajorType, WorkAreaType, PriorityType } from '../utils/Data/Task';

type Store = {
  selectedMajor: MajorType;
  selectedWorkArea: WorkAreaType;
  selectedPriority: PriorityType;
  setSelectedMajor: (major: MajorType) => void;
  setSelectedWorkArea: (workArea: WorkAreaType) => void;
  setSelectedPriority: (priority: PriorityType) => void;
};

export const useDropDownStore = create<Store>((set) => ({
  selectedMajor: '',
  selectedWorkArea: '',
  selectedPriority: '',
  setSelectedMajor: (major) => set({ selectedMajor: major }),
  setSelectedWorkArea: (workArea) => set({ selectedWorkArea: workArea }),
  setSelectedPriority: (priority) => set({ selectedPriority: priority }),
}));
