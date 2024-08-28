import { Controller, FieldValues } from "react-hook-form";
import { Autocomplete, FormHelperText, TextField } from "@mui/material";

import { ControlledAutocompleteProps } from "./types";

const ControlledAutocomplete = <T extends FieldValues>(
  props: ControlledAutocompleteProps<T>,
) => {
  const { name, rules, autocompleteProps, textFieldProps, form } = props;

  const control = form?.control;
  const error = form?.formState?.errors[name];

  return (
    <Controller
      name={name}
      control={control}
      rules={rules}
      render={({ field: { value, onChange, onBlur } }) => {
        const selectedOption =
          autocompleteProps.options.find(
            (option: { label: string; value: any }) => option.value === value,
          ) || null;

        return (
          <>
            <Autocomplete
              {...autocompleteProps}
              value={selectedOption ?? null}
              getOptionLabel={(option) => option.label}
              isOptionEqualToValue={(option, value) =>
                option.value === value.value
              }
              renderOption={(props, option) => {
                return (
                  <li {...props} key={option?.value}>
                    {option.label}
                  </li>
                );
              }}
              renderInput={(params) => (
                <TextField
                  {...params}
                  {...textFieldProps}
                  error={Boolean(error)}
                  size="small"
                />
              )}
              onChange={(e, data) => onChange(data ? data.value : null)}
              onBlur={onBlur}
            />
            {error && (
              <FormHelperText sx={{ color: "error.main" }}>
                {error?.message?.toString()}
              </FormHelperText>
            )}
          </>
        );
      }}
    />
  );
};

export default ControlledAutocomplete;
