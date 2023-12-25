import React from 'react'

import { checkDateIsEqual, checkIsToday } from 'utils'
import { useCalendar } from './hooks/useCalendar'

import s from './TodoCalendar.module.scss'
import { ITodoList } from 'store/atom/TodoListState.ts'

interface CalendarProps {
  todos: ITodoList[]
  locale?: string
  selectedDate: Date | null
  selectDate: (date: Date | null) => void
  firstWeekDayNumber?: number
}

export const TodoCalendar: React.FC<CalendarProps> = ({
  todos,
  locale = 'default',
  selectedDate: date,
  selectDate,
  firstWeekDayNumber = 2,
}) => {
  const { functions, state } = useCalendar({
    locale,
    selectedDate: date,
    firstWeekDayNumber,
  })

  return (
    <div className={s.calendar}>
      <div className={s.calendarHeader}>
        <div
          aria-hidden
          className={s.calendarHeaderArrowLeft}
          onClick={() => functions.onClickArrow('left')}
        />
        {state.mode === 'days' && (
          <div
            style={{ cursor: 'pointer' }}
            aria-hidden
            onClick={() => functions.setMode('monthes')}
          >
            {state.monthesNames[state.selectedMonth.monthIndex].month}{' '}
            {state.selectedYear}
          </div>
        )}
        {state.mode === 'monthes' && (
          <div
            style={{ cursor: 'pointer' }}
            aria-hidden
            onClick={() => functions.setMode('years')}
          >
            {state.selectedYear}
          </div>
        )}
        {state.mode === 'years' && (
          <div>
            {state.selectedYearsInterval[0]} -{' '}
            {state.selectedYearsInterval[state.selectedYearsInterval.length - 1]}
          </div>
        )}
        <div
          aria-hidden
          className={s.calendarHeaderArrowRight}
          onClick={() => functions.onClickArrow('right')}
        />
      </div>
      <div className={s.calendarBody}>
        {state.mode === 'days' && (
          <>
            <div className={s.calendarWeekNames}>
              {state.weekDaysNames.map((weekDaysName) => (
                <div key={weekDaysName.dayShort}>{weekDaysName.dayShort}</div>
              ))}
            </div>
            <div className={s.calendarDays}>
              {state.calendarDays.map((day) => {
                const isToday = checkIsToday(day.date)
                const isSelectedDay = checkDateIsEqual(day.date, state.selectedDay.date)
                const isAdditionalDay = day.monthIndex !== state.selectedMonth.monthIndex
                const hasTasks = todos.some((todo) =>
                  checkDateIsEqual(day.date, new Date(todo.date))
                )
                return (
                  <div
                    key={`${day.dayNumber}-${day.monthIndex}`}
                    aria-hidden
                    onClick={() => {
                      functions.setSelectedDay(day)
                      selectDate(day.date)
                    }}
                    className={[
                      `${s.calendarDay}`,
                      isToday ? `${s.calendarTodayItem}` : '',
                      isSelectedDay ? `${s.calendarSelectedItem}` : '',
                      isAdditionalDay ? `${s.calendarAdditionalDay}` : '',
                      hasTasks ? `${s.calendarEventDay}` : '',
                    ].join(' ')}
                  >
                    {day.dayNumber}
                  </div>
                )
              })}
            </div>
          </>
        )}

        {state.mode === 'monthes' && (
          <div className={s.calendarPickItemsContainer}>
            {state.monthesNames.map((monthesName) => {
              const isCurrentMonth =
                new Date().getMonth() === monthesName.monthIndex &&
                state.selectedYear === new Date().getFullYear()
              const isSelectedMonth =
                monthesName.monthIndex === state.selectedMonth.monthIndex

              return (
                <div
                  key={monthesName.month}
                  aria-hidden
                  onClick={() => {
                    functions.setSelectedMonthByIndex(monthesName.monthIndex)
                    functions.setMode('days')
                  }}
                  className={[
                    `${s.calendarPickItem}`,
                    isSelectedMonth ? `${s.calendarSelectedItem}` : '',
                    isCurrentMonth ? `${s.calendarTodayItem}` : '',
                  ].join(' ')}
                >
                  {monthesName.monthShort}
                </div>
              )
            })}
          </div>
        )}

        {state.mode === 'years' && (
          <div className={s.calendarPickItemsContainer}>
            <div className={s.calendarUnchoosableYear}>
              {state.selectedYearsInterval[0] - 1}
            </div>
            {state.selectedYearsInterval.map((year) => {
              const isCurrentYear = new Date().getFullYear() === year
              const isSelectedYear = year === state.selectedYear

              return (
                <div
                  key={year}
                  aria-hidden
                  onClick={() => {
                    functions.setSelectedYear(year)
                    functions.setMode('monthes')
                  }}
                  className={[
                    `${s.calendarPickItem}`,
                    isCurrentYear ? `${s.calendarTodayItem}` : '',
                    isSelectedYear ? `${s.calendarSelectedItem}` : '',
                  ].join(' ')}
                >
                  {year}
                </div>
              )
            })}
            <div className={s.calendarUnchoosableYear}>
              {state.selectedYearsInterval[state.selectedYearsInterval.length - 1] + 1}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
