import { FC } from "react";
import { Button } from "@mui/material";

interface AppButtonProps {
  type: "button" | "submit";
  color: "primary" | "success";
  label: string;
  onClick?: () => void;
}

export const AppButton: FC<AppButtonProps> = ({ color, label, type, onClick }) => {
  return (
    <Button type={type} variant="contained" color={color} onClick={onClick}>
      {label}
    </Button>
  );
};

