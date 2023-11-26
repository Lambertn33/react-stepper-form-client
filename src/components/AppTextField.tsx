import { FC, ChangeEvent } from "react";
import { TextField } from "@mui/material";

interface AppTextFieldInputs {
  label: string;
  type: "text" | "tel" | "email";
  innerRef: React.RefObject<HTMLInputElement>;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
}

export const AppTextField: FC<AppTextFieldInputs> = ({
  label,
  innerRef,
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
      inputRef={innerRef}
      size="small"
    />
  );
};
