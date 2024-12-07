"use client";
import React from 'react';
import { format, parseISO, subDays, addDays } from "date-fns";

interface DatePickerProps {
  selectedDate: string;
  onDateChange: (date: string) => void;
}

const DatePicker: React.FC<DatePickerProps> = ({ selectedDate, onDateChange }) => {
  const handleDateChange = (offset: number) => {
    const currentDate = parseISO(selectedDate);
    const newDate = addDays(currentDate, offset);
    
    // Using the toISOString().split('T')[0] to get YYYY-MM-DD format without time
    onDateChange(format(newDate, 'yyyy-MM-dd'));
  };

  const parsedSelectedDate = parseISO(selectedDate);

  return (
    <div className="mb-8">
      <h1 className="text-4xl font-bold tracking-tight text-gray-900">
        {format(parsedSelectedDate, "EEEE")}
      </h1>
      <div className="mt-2 flex space-x-2 md:space-x-4 overflow-x-auto scrollbar-hide">
        {Array.from({ length: 7 }).map((_, i) => {
          const date = subDays(parsedSelectedDate, 3 - i);
          
          const isToday = format(date, 'yyyy-MM-dd') === selectedDate;

          return (
            <button
              key={i}
              onClick={() => handleDateChange(i - 3)}
              className={`flex flex-col items-center rounded-lg p-2 md:p-4 shrink-0 ${
                isToday ? "bg-black text-white" : "bg-white text-gray-500 hover:bg-gray-100"
              }`}
            >
              <span className="text-xs md:text-sm">{format(date, "EEE").charAt(0)}</span>
              <span className="text-lg font-bold md:text-2xl">{format(date, "d")}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default DatePicker;