import { FC } from "react";
import { FieldErrors } from "react-hook-form";

interface ErrorLabelProps {
  errors: FieldErrors<any>;
  field: string;
}

export const ErrorLabel: FC<ErrorLabelProps> = (props) => {
  const { errors, field } = props;

  const error = errors[field];
  if (!error) return null;

  // @ts-ignore
  return <p className="text-sm text-rose-500">{error.message}</p>;
};
