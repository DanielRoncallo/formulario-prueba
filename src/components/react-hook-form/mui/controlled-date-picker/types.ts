import {
  FieldValues,
  Path,
  RegisterOptions,
  UseFormReturn,
} from "react-hook-form";
import { TextFieldProps } from "@mui/material";
import { DatePickerProps } from "@mui/x-date-pickers";
import { Dayjs } from "dayjs";

export type ControlledDatePickerProps<T extends FieldValues> = {
  name: Path<T>;
  rules?: RegisterOptions<T>;
  datePickerProps?: DatePickerProps<Dayjs>;
  form?: UseFormReturn<any>;
  textFieldProps?: TextFieldProps;
  required?: boolean;
  label: string;
};
