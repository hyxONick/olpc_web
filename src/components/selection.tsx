import { FC } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { SelectProps } from "@radix-ui/react-select";
import { Label } from "./ui/label";

interface SelectionProps extends SelectProps {
  width?: number;
  label: string;
  options: { value: string; label: string }[];
}

export const Selection: FC<SelectionProps> = (props) => {
  const { width = 150, options, label, ...rest } = props;

  return (
    <div className="flex items-center gap-3">
      <Label>{label}</Label>

      <Select {...rest}>
        <SelectTrigger>
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          {options.map((option) => (
            <SelectItem value={option.value} key={option.value}>
              {option.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
};
