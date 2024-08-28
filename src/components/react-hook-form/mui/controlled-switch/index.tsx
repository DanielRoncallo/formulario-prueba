import { Controller, FieldValues } from "react-hook-form";
import {
  FormControlLabel,
  FormGroup,
  FormHelperText,
  Switch,
} from "@mui/material";

import { ControlledSwitchProps } from "./types";

const ControlledSwitch = <T extends FieldValues>(
  props: ControlledSwitchProps<T>,
) => {
  const { name, rules, label, switchProps, form } = props;

  const control = form?.control;
  const error = form?.formState?.errors[name];

  return (
    <Controller
      name={name}
      control={control}
      rules={rules}
      render={({ field: { value, onChange, onBlur } }) => (
        <FormGroup row>
          <FormControlLabel
            value="end"
            labelPlacement="end"
            control={
              <Switch
                checked={value ?? false}
                {...switchProps}
                onChange={(e) => onChange(e.target.checked)}
                onBlur={onBlur}
              />
            }
            label={label}
          />
          {error && (
            <FormHelperText sx={{ color: "error.main" }}>
              {error.message as unknown as string}
            </FormHelperText>
          )}
        </FormGroup>
      )}
    />
  );
};

export default ControlledSwitch;
