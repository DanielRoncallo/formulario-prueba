import { ChangeEvent } from "react";
import {
  FieldValues,
  Path,
  RegisterOptions,
  UseFormReturn,
} from "react-hook-form";
import { AutocompleteProps, TextFieldProps } from "@mui/material";

export type ControlledAutocompleteProps<T extends FieldValues> = {
  name: Path<T>;
  required?: boolean;
  autocompleteProps?: AutocompleteProps<
    ControlledAutocompleteOption,
    false,
    false,
    false
  >;
  options: ControlledAutocompleteOption[];
  label: string;
  form?: UseFormReturn<any>;
  textFieldProps?: TextFieldProps;
  handleOnChange?: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void
};

export type ControlledAutocompleteOption = {
  label: string;
  value: any;
};
