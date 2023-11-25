import { FC } from "react";
import { Typography } from "@mui/material";

interface AppTextProps {
  variant: "subtitle1" | "h5";
  text: string;
}

export const AppText: FC<AppTextProps> = ({ text, variant }) => {
  return <Typography variant={variant}>{text}</Typography>;
};
