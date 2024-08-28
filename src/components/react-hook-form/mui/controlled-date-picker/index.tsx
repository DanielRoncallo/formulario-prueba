/* eslint-disable @typescript-eslint/ban-ts-comment */
import { Controller, FieldValues } from "react-hook-form";
import { FormHelperText } from "@mui/material";

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
  const { name, rules, datePickerProps, textFieldProps, form } = props;

  const control = form?.control;
  const error = form?.formState?.errors[name];
  const setValue = form?.setValue;

  return (
    <Controller
      name={name}
      control={control}
      rules={rules}
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
  );
};

export default ControlledDatePicker;
