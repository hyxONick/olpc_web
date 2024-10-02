import { DatePickerWithRange } from "@/components/datePickerWithRange";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { LineChart } from "@mui/x-charts";
import React, { Fragment } from "react";

const page = () => {
  return (
    <Fragment>
      <div className="w-full h-full flex flex-col">
        <div className="flex flex-col gap-3 justify-center">
          <DatePickerWithRange label="Pick Duration" />

          <RadioGroup defaultValue="option-one">
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="option-one" id="option-one" />
              <Label htmlFor="option-one">
                Show App Usage w/in school hours
              </Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="option-two" id="option-two" />
              <Label htmlFor="option-two">
                Show App Usage outside school hours
              </Label>
            </div>
          </RadioGroup>

          <Button className="w-[300px]">Search</Button>
        </div>

        <div className="flex-1">
          <LineChart
            xAxis={[{ data: [1, 2, 3, 5, 8, 10] }]}
            series={[
              {
                data: [2, 5.5, 2, 8.5, 1.5, 5],
              },
            ]}
          />
        </div>
      </div>
    </Fragment>
  );
};

export default page;
