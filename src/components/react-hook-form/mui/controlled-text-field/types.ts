import {
  FieldValues,
  Path,
  RegisterOptions,
  UseFormReturn,
} from "react-hook-form";
import { TextFieldProps } from "@mui/material";

export type ControlledTextFieldProps<T extends FieldValues> = {
  name: Path<T>;
  rules?: RegisterOptions<T>;
  form?: UseFormReturn<any>;
  textFieldProps?: TextFieldProps;
  regExp?: RegExp;
  typeNumericMask?: boolean;
  required?: boolean;
  label: string;
};
