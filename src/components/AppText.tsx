import { FC } from "react";
import { Typography } from "@mui/material";

interface AppTextProps {
  variant: "subtitle1" | "h5";
  text: string;
  color?: string;
}

export const AppText: FC<AppTextProps> = ({ text, variant, color }) => {
  return <Typography color={color} variant={variant}>{text}</Typography>;
};
