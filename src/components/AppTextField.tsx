import { FC } from "react";
import { TextField } from "@mui/material";

interface AppTextFieldInputs {
  label: string;
  ref: React.RefObject<HTMLInputElement>;
}

export const AppTextField: FC<AppTextFieldInputs> = ({
  label,
  ref,
}) => {
  return (
    <TextField
      label={label}
      variant="outlined"
      fullWidth
      margin="normal"
      inputRef={ref}
      size="small"
    />
  );
};
