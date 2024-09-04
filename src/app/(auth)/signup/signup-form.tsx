"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { FormField } from "../_components/formField";
import { SubmitHandler, useForm } from "react-hook-form";
import { SignUpValidation } from "./signup-validation";
import { yupResolver } from "@hookform/resolvers/yup";
import { ErrorLabel } from "../_components/errorLabel";
import { PasswordInput } from "@/components/passwordInput";

export const SignUpForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignUpValidation.Inputs>({
    resolver: yupResolver(SignUpValidation.schema),
  });

  const onSubmit: SubmitHandler<SignUpValidation.Inputs> = async (data) => {
    console.log(data);
  };

  return (
    <form className="space-y-4 w-full" onSubmit={handleSubmit(onSubmit)}>
      <FormField>
        <Label htmlFor="name">Name</Label>
        <Input id="name" {...register("name")} />
        <ErrorLabel errors={errors} field="name" />
      </FormField>

      <FormField>
        <Label htmlFor="email">Email</Label>
        <Input type="email" id="email" {...register("email")} />
        <ErrorLabel errors={errors} field="email" />
      </FormField>

      <FormField>
        <Label htmlFor="email">Password</Label>
        <PasswordInput id="password" {...register("password")} />
        <ErrorLabel errors={errors} field="password" />
      </FormField>

      <FormField>
        <Label htmlFor="password_confimation">Confirm Password</Label>

        <PasswordInput
          id="password_confirmation"
          {...register("password_confirmation")}
        />

        <ErrorLabel errors={errors} field="password_confirmation" />
      </FormField>

      <Button type="submit" className="w-full rounded-lg" variant="default">
        Submit
      </Button>
    </form>
  );
};
