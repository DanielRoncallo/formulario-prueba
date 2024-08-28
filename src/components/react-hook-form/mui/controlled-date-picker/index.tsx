/* eslint-disable @typescript-eslint/ban-ts-comment */
import { Controller, FieldValues } from "react-hook-form";
import { FormControl, FormHelperText } from "@mui/material";

import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from "dayjs";
import { esES } from "@mui/x-date-pickers/locales";
import "dayjs/locale/es";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";

dayjs.extend(utc);
dayjs.extend(timezone);

import { ControlledDatePickerProps } from "./types";
import { DatePicker } from "@mui/x-date-pickers";

const ControlledDatePicker = <T extends FieldValues>(
  props: ControlledDatePickerProps<T>,
) => {
  const { name, required, datePickerProps, textFieldProps, form, label } = props;

  const control = form?.control;
  const error = form?.formState?.errors[name];
  const setValue = form?.setValue;

  return (
    <FormControl fullWidth>
      <Controller
        name={name}
        control={control}
        rules={{ required: required }}
        render={({ field }) => {
          return (
            <>
              <LocalizationProvider
                dateAdapter={AdapterDayjs}
                adapterLocale="es"
                localeText={
                  esES.components.MuiLocalizationProvider.defaultProps.localeText
                }
              >
                <DatePicker
                  label={label}
                  {...datePickerProps}
                  value={dayjs(field.value ?? null)}
                  slotProps={{
                    textField: {
                      error: Boolean(error),
                      size: "small",
                      ...textFieldProps,
                    },
                  }}
                  onChange={(newValue) => {
                    setValue &&
                      setValue(
                        name,
                        newValue && newValue.isValid()
                          ? (newValue
                            .tz("America/Bogota")
                            .startOf("day")
                            .toDate() as any)
                          : (null as unknown as Date),
                        {
                          shouldValidate: true,
                          shouldDirty: true,
                        },
                      );
                  }}
                />
              </LocalizationProvider>
              {error && (
                <FormHelperText sx={{ color: "error.main" }} id="">
                  {error.message as unknown as string}
                </FormHelperText>
              )}
            </>
          );
        }}
      />
    </FormControl>
  );
};

export default ControlledDatePicker;
