import { FC, ChangeEvent } from "react";
import { TextField } from "@mui/material";

interface AppTextFieldInputs {
  label: string;
  innerRef: React.RefObject<HTMLInputElement>;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;

}

export const AppTextField: FC<AppTextFieldInputs> = ({
  label,
  innerRef,
  onChange,
}) => {
  return (
    <TextField
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
