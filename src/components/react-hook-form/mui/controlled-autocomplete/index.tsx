import { Controller, FieldValues } from "react-hook-form";
import { Autocomplete, FormControl, FormHelperText, TextField } from "@mui/material";

import { ControlledAutocompleteProps } from "./types";

const ControlledAutocomplete = <T extends FieldValues>(
  props: ControlledAutocompleteProps<T>,
) => {
  const { name, required, autocompleteProps, textFieldProps, form, label, options, handleOnChange } = props;

  const control = form?.control;
  const error = form?.formState?.errors[name]; 


  return (
    <FormControl fullWidth>
      <Controller
        name={name}
        control={control}
        rules={{required: required}}
        render={({ field: { value, onChange, onBlur } }) => {
          const selectedOption =
            options.find(
              (option: { label: string; value: any }) => option.value === value,
            ) || null;

          return (
            <>
              <Autocomplete
                {...autocompleteProps}
                options={options}
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
                    label={label}
                    onChange={(e) => handleOnChange && handleOnChange(e)}
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
    </FormControl>
  );
};

export default ControlledAutocomplete;
