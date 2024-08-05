import React, { CSSProperties, ReactNode, useState } from 'react';

import cs from 'classnames';
import dayjs, { Dayjs } from 'dayjs';

import Header from './Header';
import LocaleContext from './LocaleContext';
import MonthCalendar from './MonthCalendar';
import './index.less';

export interface CalendarProps {
  value: Dayjs;
  style?: CSSProperties;
  className?: string | string[];
  allowSelect?: boolean;
  todayButton?: boolean;
  mode?: 'month' | 'year';
  // 定制日期单元格显示的内容的：是整个覆盖，连带日期的数字一起
  dateRender?: (currentDate: Dayjs) => ReactNode;
  // 只会在日期的数字下添加一些内容
  dateInnerContent?: (currentDate: Dayjs) => ReactNode;
  // 国际化相关
  locale?: string;
  // 选择了日期之后会触发的回调
  onChange?: (date: Dayjs) => void;
}

function Calendar(props: CalendarProps) {
  const {
    value,
    style,
    className,
    allowSelect = true,
    todayButton = true,
    mode = 'month',
    dateRender,
    dateInnerContent,
    locale,
    onChange,
  } = props;

  const [curValue, setCurValue] = useState<Dayjs>(value);

  const [curMonth, setCurMonth] = useState<Dayjs>(value);

  const classNames = cs('calendar', className);

  function selectHandler(date: Dayjs) {
    changeDate(date);
  }

  function prevMonthHandler() {
    setCurMonth(curMonth.subtract(1, 'month'));
  }

  function nextMonthHandler() {
    setCurMonth(curMonth.add(1, 'month'));
  }

  function todayHandler() {
    const date = dayjs(Date.now());

    changeDate(date);
  }

  function changeDate(date: Dayjs) {
    setCurValue(date);
    setCurMonth(date);
    onChange?.(date);
  }

  return (
    <LocaleContext.Provider
      value={{
        locale: locale || navigator.language,
      }}
    >
      <div className={classNames} style={style}>
        <Header
          curMonth={curMonth}
          prevMonthHandler={prevMonthHandler}
          nextMonthHandler={nextMonthHandler}
          todayHandler={todayHandler}
        ></Header>
        <MonthCalendar
          {...props}
          value={curValue}
          curMonth={curMonth}
          selectHandler={selectHandler}
        />
      </div>
    </LocaleContext.Provider>
  );
}

export default Calendar;
