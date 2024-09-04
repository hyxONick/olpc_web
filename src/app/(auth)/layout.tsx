import Link from "next/link";
import React, { Fragment } from "react";

interface AuthLayoutProps {
  children: React.ReactNode;
}

const AuthLayout = (props: AuthLayoutProps) => {
  const { children } = props;

  return (
    <Fragment>
      <div className="grid min-h-screen grid-cols-1 lg:grid-cols-2 overflow-hidden">
        <main className="flex items-center justify-center relative">
          <Link href="/" className="flex items-center absolute left-4 top-4">
            SkooLearn
          </Link>

          {children}
        </main>
        <div className="lg:block hidden h-full bg-auth-layout bg-cover bg-center" />
      </div>
    </Fragment>
  );
};

export default AuthLayout;
