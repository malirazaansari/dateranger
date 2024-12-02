import * as React from "react";
import { addDays, format } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";
import { DateRange, isDateRange } from "react-day-picker";

import { Button } from "./ui/button";
import { Calendar } from "./ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";

export function DatePickerWithRange({ className }) {
  // Ensure initial state has valid Date objects for 'from' and 'to'
  const [date, setDate] =
    React.useState <
    DateRange >
    {
      from: new Date(2022, 0, 20),
      to: addDays(new Date(2022, 0, 20), 20),
    };

  return (
    <div className={className}>
      <Popover>
        <PopoverTrigger asChild>
          <Button
            id="date"
            variant="outline"
            className="w-[300px] justify-start text-left font-normal"
          >
            <CalendarIcon />
            {date?.from ? (
              date?.to ? (
                <>
                  {format(date.from, "LLL dd, y")} -{" "}
                  {format(date.to, "LLL dd, y")}
                </>
              ) : (
                format(date.from, "LLL dd, y")
              )
            ) : (
              <span>Pick a date</span>
            )}
          </Button>
        </PopoverTrigger>
        <PopoverContent
          className="w-auto p-0"
          align="start"
        >
          <Calendar
            initialFocus
            mode="range"
            defaultMonth={date?.from} // Set default month to 'from' date
            selected={date} // Pass the whole DateRange object
            onSelect={setDate} // Set the new date range
            numberOfMonths={2} // Display 2 months at once
          />
        </PopoverContent>
      </Popover>
    </div>
  );
}
