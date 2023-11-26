import { FC, ChangeEvent } from "react";
import { TextField } from "@mui/material";

interface AppTextFieldInputs {
  label: string;
  type: "text" | "number" | "email";
  value: string;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
}

export const AppTextField: FC<AppTextFieldInputs> = ({
  label,
  value,
  onChange,
  type,
}) => {
  return (
    <TextField
      type={type}
      label={label}
      variant="outlined"
      fullWidth
      onChange={onChange}
      margin="normal"
      value={value}
      size="small"
    />
  );
};
