import { createContext, useContext, ReactNode } from "react";
import useCalendar from "../../hooks/useCalendar";

interface DateInfo {
  year: string;
  month: string;
  day: string;
}
interface CalendarContextType {
  currentDate: DateInfo;
  daysInMonth: (DateInfo & { date: string; dayIndexOfWeek: number })[];
  dispatch: {
    handlePrevMonth: () => void;
    handleNextMonth: () => void;
  };
  selectedDate: {
    date: string;
    selectDate: (date: string) => void;
  };
}

export const CalendarContext = createContext<CalendarContextType | null>(null);

export default function useCalendarContext() {
  const context = useContext(CalendarContext);
  if (!context) {
    throw new Error("useCalendarContext must be used within CalendarProvider");
  }
  return context;
}

export const CalendarProvider = ({ children }: { children: ReactNode }) => {
  const calendar = useCalendar();
  return (
    <CalendarContext.Provider value={calendar}>
      {children}
    </CalendarContext.Provider>
  );
};