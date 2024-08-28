import {
  FieldValues,
  Path,
  RegisterOptions,
  UseFormReturn,
} from "react-hook-form";
import { RadioGroupProps } from "@mui/material";

export type ControlledRadioButtonsProps<T extends FieldValues> = {
  name: Path<T>;
  rules?: RegisterOptions<T>;
  radioGroupProps: RadioGroupProps;
  form?: UseFormReturn<any>;
  radioGroupOptions: ControlledRadioButtonsOption[];
};

export type ControlledRadioButtonsOption = {
  label: string;
  value: any;
};
