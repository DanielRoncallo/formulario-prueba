import {
  FieldValues,
  Path,
  RegisterOptions,
  UseFormReturn,
} from "react-hook-form";
import { AutocompleteProps, TextFieldProps } from "@mui/material";

export type ControlledAutocompleteProps<T extends FieldValues> = {
  name: Path<T>;
  rules?: RegisterOptions<T>;
  autocompleteProps: AutocompleteProps<
    ControlledAutocompleteOption,
    false,
    false,
    false
  >;
  form?: UseFormReturn<any>;
  textFieldProps?: TextFieldProps;
};

export type ControlledAutocompleteOption = {
  label: string;
  value: any;
};
