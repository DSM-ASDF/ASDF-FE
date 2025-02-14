import styled from "styled-components";
import { Font } from "../../styles/Font";
import { color } from "../../styles/color";
import { Arrow } from "../../assets";
import useCalendarContext from "./useCalendarContext";

export const Calendar = () => {
  const weeks = ["일", "월", "화", "수", "목", "금", "토"];
  const { dispatch, daysInMonth, selectedDate, currentDate } =
    useCalendarContext();

  return (
    <CalendarContainer>
      <CalendarHeader>
        <YearMonth>
          {currentDate.year}년 {currentDate.month}월
        </YearMonth>
        <ArrowWrap>
          <Arrow
            size={36}
            color={color.white}
            rotate="left"
            onClick={dispatch.handlePrevMonth}
          />
          <Arrow
            size={36}
            color={color.white}
            rotate="right"
            onClick={dispatch.handleNextMonth}
          />
        </ArrowWrap>
      </CalendarHeader>

      <CalendarBody>
        <DayWrap>
          {weeks.map((week) => (
            <DayOfWeek key={week}>{week}</DayOfWeek>
          ))}
        </DayWrap>
        <DayWrap>
          {daysInMonth
            .filter((date) => date.month === currentDate.month)
            .map((date) => (
              <Day
                onClick={() => selectedDate.selectDate(date.date)}
                $isSelectedDate={selectedDate.date === date.date}
                key={date.date}
              >
                <span>{date.day}</span>
              </Day>
            ))}
        </DayWrap>
      </CalendarBody>
    </CalendarContainer>
  );
};

const CalendarContainer = styled.div`
  width: 560px;
  display: flex;
  flex-direction: column;
  gap: 36px;
`;

const CalendarHeader = styled.div`
  display: flex;
  justify-content: space-between;
`;

const YearMonth = styled.p`
  font-size: ${Font.semi[24]};
  color: ${color.white};
`;

const ArrowWrap = styled.div`
  display: flex;
  gap: 4px;
`;

const CalendarBody = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

const DayWrap = styled.div`
  display: grid;
  grid-template-columns: repeat(7, minmax(56px, 1fr));
  grid-row-gap: 24px;
  grid-column-gap: 28px;
`;

const DayOfWeek = styled.div`
  width: 56px;
  height: 56px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${color.green200};
`;

const Day = styled.div<{ $isSelectedDate: boolean }>`
  display: flex;
  width: 56px;
  height: 56px;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  border: ${({ $isSelectedDate }) =>
    $isSelectedDate ? `1px solid ${color.green200}` : ""};
  border-radius: 8px;
  color: ${color.white};
  ${Font.regular[20]}
`;
