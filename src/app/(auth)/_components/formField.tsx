import { FC } from "react";

export const FormField: FC<{ children: React.ReactNode }> = ({ children }) => {
  return <div className="grid w-full items-center gap-1.5">{children}</div>;
};