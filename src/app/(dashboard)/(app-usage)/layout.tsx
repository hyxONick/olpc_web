import React, { FC } from "react";

const Layout: FC<React.PropsWithChildren> = ({ children }) => {
  return <div className="w-full h-full flex">{children}</div>;
};

export default Layout;
