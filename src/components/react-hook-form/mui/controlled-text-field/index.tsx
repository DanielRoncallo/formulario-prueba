import {
  ChangeEvent,
  ChangeEventHandler,
  FocusEvent,
  FocusEventHandler,
  forwardRef,
  Fragment,
} from "react";
import { Controller, FieldValues, Noop } from "react-hook-form";
import { FormHelperText, TextField } from "@mui/material";

import { ControlledTextFieldProps } from "./types";
import { NumericFormatProps, NumericFormat } from "react-number-format";

interface CustomProps {
  onChange: (event: { target: { name: string; value: string } }) => void;
  name: string;
}

const ControlledTextField = <T extends FieldValues>(
  props: ControlledTextFieldProps<T>,
) => {
  const { name, rules, textFieldProps, form, regExp, typeNumericMask } = props;

  const control = form?.control;
  const error = form?.formState?.errors[name];

  const customOnChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    controllerOnChange: (...event: any[]) => void,
    textFieldOnChange:
      | ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>
      | undefined,
  ) => {
    const value = e.target.value;
    if (value && regExp && !regExp?.test(value)) return;

    controllerOnChange(e);
    textFieldOnChange && textFieldOnChange(e);
  };

  const customOnBlur = (
    e: FocusEvent<HTMLInputElement | HTMLTextAreaElement, Element>,
    controllerOnBlur: Noop,
    textFieldOnBlur:
      | FocusEventHandler<HTMLInputElement | HTMLTextAreaElement>
      | undefined,
  ) => {
    controllerOnBlur();
    textFieldOnBlur && textFieldOnBlur(e);
  };

  const NumericFormatCustom =  forwardRef<NumericFormatProps, CustomProps>((props, ref) => {
    const { onChange, ...other } = props;
  
    return (
      <NumericFormat
        {...other}
        getInputRef={ref}
        onValueChange={(values) => {
          onChange({
            target: {
              name: props.name,
              value: values.value,
            },
          });
        }}
        thousandSeparator
        valueIsNumericString
        prefix="$"
      />
    );
  });

  return (
    <Controller
      name={name}
      control={control}
      rules={rules}
      render={({ field: { value, onChange, onBlur } }) => (
        <Fragment>
          <TextField            
            value={value ?? ""}
            onBlur={(e) => customOnBlur(e, onBlur, textFieldProps?.onBlur)}
            onChange={(e) =>
              customOnChange(e, onChange, textFieldProps?.onChange)
            }
            error={Boolean(error)}
            size="small"
            {...textFieldProps}
            InputProps={{
              inputComponent: typeNumericMask ? NumericFormatCustom as any : null,
            }}
          />
          {error && (
            <FormHelperText sx={{ color: "error.main" }}>
              {error.message as unknown as string}
            </FormHelperText>
          )}
        </Fragment>
      )}
    />
  );
};

export default ControlledTextField;
