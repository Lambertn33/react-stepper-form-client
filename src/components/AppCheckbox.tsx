import { FC, ChangeEvent } from "react";
import { FormControlLabel, Checkbox } from "@mui/material";

interface AppCheckboxProps {
  label: string;
  checked: boolean;
  disabled?: boolean
  value?: number;
  onChange: (value: number, checked: boolean) => void;
}

export const AppCheckbox: FC<AppCheckboxProps> = ({
  label,
  checked,
  value,
  disabled,
  onChange,
}) => {
  const handleCheckboxChange = (event: ChangeEvent<HTMLInputElement>) => {
    const isChecked = event.target.checked;
    onChange(value!, isChecked);
  };
  return (
    <FormControlLabel
      control={
        <Checkbox
          onChange={handleCheckboxChange}
          value={value}
          checked={checked}
          disabled={disabled}
        />
      }
      label={label}
    />
  );
};
