import { FC } from "react";
import { Button } from "@mui/material";

interface AppButtonProps {
  type: "button" | "submit";
  color: "primary" | "success" | "error";
  label: string;
  onClick?: () => void;
  disabled: boolean;
}

export const AppButton: FC<AppButtonProps> = ({
  color,
  label,
  type,
  onClick,
  disabled,
}) => {
  return (
    <Button
      disabled={disabled}
      type={type}
      variant="contained"
      color={color}
      onClick={onClick}
    >
      {label}
    </Button>
  );
};
