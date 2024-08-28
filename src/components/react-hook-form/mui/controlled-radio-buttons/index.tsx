import { Controller, FieldValues } from "react-hook-form";
import { FormControlLabel, Radio, RadioGroup } from "@mui/material";

import { ControlledRadioButtonsProps } from "./types";

const ControlledRadioButtons = <T extends FieldValues>(
  props: ControlledRadioButtonsProps<T>,
) => {
  const { name, rules, radioGroupProps, radioGroupOptions, form } = props;

  const control = form?.control;

  return (
    <Controller
      name={name}
      control={control}
      rules={rules}
      render={({ field: { value, onChange } }) => (
        <RadioGroup
          {...radioGroupProps}
          name={name}
          value={value}
          onChange={(event) => onChange(event.target.value)}
        >
          {radioGroupOptions.map((radioGroupOption) => (
            <FormControlLabel
              key={radioGroupOption.value}
              value={radioGroupOption.value}
              control={<Radio />}
              label={radioGroupOption.label}
            />
          ))}
        </RadioGroup>
      )}
    />
  );
};

export default ControlledRadioButtons;
