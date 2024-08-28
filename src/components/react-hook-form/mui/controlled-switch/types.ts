import {
  FieldValues,
  Path,
  RegisterOptions,
  UseFormReturn,
} from "react-hook-form";

import { SwitchProps } from "@mui/material";

export type ControlledSwitchProps<T extends FieldValues> = {
  name: Path<T>;
  rules?: RegisterOptions<T>;
  label: string;
  form?: UseFormReturn<any>;
  switchProps?: SwitchProps;
};
