import { DetailedHTMLProps, FC, ImgHTMLAttributes } from "react";

export const Logo: FC<
  DetailedHTMLProps<ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement>
> = (props) => {
  return <img src="/images/logo.svg" alt="" {...props} />;
};
