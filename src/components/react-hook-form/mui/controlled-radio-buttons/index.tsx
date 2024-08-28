import { Controller, FieldValues } from "react-hook-form";
import { FormControl, FormControlLabel, Radio, RadioGroup } from "@mui/material";

import { ControlledRadioButtonsProps } from "./types";

const ControlledRadioButtons = <T extends FieldValues>(
  props: ControlledRadioButtonsProps<T>,
) => {
  const { name, required, radioGroupProps, radioGroupOptions, form, row } = props;

  const control = form?.control;

  return (
    <FormControl fullWidth>
      <Controller
        name={name}
        control={control}
        rules={{ required: required }}
        render={
          ({ field: { value, onChange } }) => (
            <RadioGroup
              row={row}
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
    </FormControl>
  );
};

export default ControlledRadioButtons;
