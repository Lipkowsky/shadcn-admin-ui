"use client";
import { useState } from "react";
import { Card } from "./ui/card";
import { Checkbox } from "./ui/checkbox";
import { ScrollArea } from "./ui/scroll-area";
import { Calendar } from "./ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverDescription,
  PopoverHeader,
  PopoverTitle,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "./ui/button";
import { CalendarIcon } from "lucide-react";
import { format } from "date-fns";

const TodoList = () => {
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [open, setOpen] = useState(false);
  return (
    <div className="">
        <h1 className="text-lg font-medium mb-6">Todo List</h1>
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button className="w-full">
            <CalendarIcon />
            {date ? format(date, "PPP") : <span>Pick a date</span>}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="p-0 w-auto">
          <Calendar mode="single" selected={date} onSelect={(date) => {
            setDate(date)
            setOpen(false)
          }} />
        </PopoverContent>
      </Popover>

      {/* LIST */}
      <ScrollArea className="max-h-[300px] mt-4 overflow-y-auto">
        {/* LIST ITEM */}
        <div className="flex flex-col gap-4">
          <Card className="p-4">
            <div className="flex items-center gap-4">
              <Checkbox id="item1" checked></Checkbox>
              <label htmlFor="item1" className="text-sm text-muted-foreground">
                Random checkbox 1
              </label>
            </div>
          </Card>
          <Card className="p-4">
            <div className="flex items-center gap-4">
              <Checkbox id="item1"></Checkbox>
              <label htmlFor="item1" className="text-sm text-muted-foreground">
                Random checkbox 1
              </label>
            </div>
          </Card>
          <Card className="p-4">
            <div className="flex items-center gap-4">
              <Checkbox id="item1" checked></Checkbox>
              <label htmlFor="item1" className="text-sm text-muted-foreground">
                Random checkbox 1
              </label>
            </div>
          </Card>
          <Card className="p-4">
            <div className="flex items-center gap-4">
              <Checkbox id="item1" checked></Checkbox>
              <label htmlFor="item1" className="text-sm text-muted-foreground">
                Random checkbox 1
              </label>
            </div>
          </Card>
          <Card className="p-4">
            <div className="flex items-center gap-4">
              <Checkbox id="item1" checked></Checkbox>
              <label htmlFor="item1" className="text-sm text-muted-foreground">
                Random checkbox 1
              </label>
            </div>
          </Card>
          <Card className="p-4">
            <div className="flex items-center gap-4">
              <Checkbox id="item1"></Checkbox>
              <label htmlFor="item1" className="text-sm text-muted-foreground">
                Random checkbox 1
              </label>
            </div>
          </Card>
        </div>
      </ScrollArea>
    </div>
  );
};

export default TodoList;
