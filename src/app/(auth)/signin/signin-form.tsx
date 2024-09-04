"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { FormField } from "../_components/formField";
import { useForm, SubmitHandler } from "react-hook-form";
import { PasswordInput } from "@/components/passwordInput";
import { signIn } from "next-auth/react";
import { ErrorLabel } from "../_components/errorLabel";
import { useRouter } from "next/navigation";
import { SignInValidation } from "./signin-validation";
import { yupResolver } from "@hookform/resolvers/yup";

export const SignInForm = () => {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignInValidation.Inputs>({
    resolver: yupResolver(SignInValidation.schema),
  });

  const onSubmit: SubmitHandler<SignInValidation.Inputs> = async (data) => {
    const result = await signIn("credentials", { redirect: false, ...data });
    if (result?.ok) router.push("/");
  };

  return (
    <form className="space-y-4 w-full" onSubmit={handleSubmit(onSubmit)}>
      <FormField>
        <Label htmlFor="email">Email</Label>
        <Input id="email" {...register("email")} />
        <ErrorLabel errors={errors} field="email" />
      </FormField>

      <FormField>
        <Label htmlFor="password">Password</Label>
        <PasswordInput {...register("password")} />
        <ErrorLabel errors={errors} field="password" />
      </FormField>

      <Button
        type="submit"
        className="w-full rounded-lg gap-3"
        variant="default"
      >
        Login
      </Button>
    </form>
  );
};
