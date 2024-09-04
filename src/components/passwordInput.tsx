"use client";

import { FC, ForwardedRef, forwardRef, useMemo, useState } from "react";
import { Input, InputProps } from "./ui/input";
import { Button } from "./ui/button";
import { EyeIcon, EyeOff } from "lucide-react";

interface PasswordInputProps extends InputProps {
  show?: boolean;
}

export const PasswordInput = forwardRef(
  (props: PasswordInputProps, ref: ForwardedRef<HTMLInputElement>) => {
    const [show, setShow] = useState(props.show || false);

    const icon = useMemo(() => {
      if (show) return <EyeIcon />;
      return <EyeOff />;
    }, [show]);

    return (
      <div className="relative">
        <Input
          {...props}
          className="pr-10"
          type={show ? "text" : "password"}
          ref={ref}
        />

        <Button
          className="absolute right-0 top-0 h-full px-3 py-1 hover:bg-transparent"
          onClick={() => setShow(!show)}
          variant="ghost"
          type="button"
        >
          {icon}
        </Button>
      </div>
    );
  }
);
