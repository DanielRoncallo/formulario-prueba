"use client";
import { Button, Card, CardActions, CardContent, CardHeader, Divider, FormControl, Grid } from "@mui/material";

import ControlledAutocomplete from "../components/react-hook-form/mui/controlled-autocomplete";
import { colorOptions } from "../constant/colorOptions"
import { useHome } from "./hooks";
import ControlledTextField from "@/components/react-hook-form/mui/controlled-text-field";
import ControlledDatePicker from "@/components/react-hook-form/mui/controlled-date-picker";
import ControlledSwitch from "@/components/react-hook-form/mui/controlled-switch";
import ControlledRadioButtons from "@/components/react-hook-form/mui/controlled-radio-buttons";
import { metodoPagosOptions } from "@/constant/metodoPagos";

const Home = () => {
  const {
    formularioUseForm,
    tiposIdentificacion,
    handleChangeCarro,
    optionsCarro,
    handleSubmit,
    handleReset,
  } = useHome();

  return (
    <Card >
      <CardHeader title={"Formulario de Prueba"} />
      <CardContent>
        <Grid container spacing={4}>
          <Grid item xs={12}>
            <ControlledAutocomplete
              name="colorOpcion"
              form={formularioUseForm}
              required
              options={colorOptions ?? []}
              label="Color"
            />
          </Grid>
          <Grid item xs={12}>
            <ControlledAutocomplete
              name="tipodIdentificacion"
              form={formularioUseForm}
              required
              options={tiposIdentificacion ?? []}
              label="Tipo de Identificacion"
            />
          </Grid>
          <Grid item xs={12}>
            <ControlledAutocomplete
              name="carroId"
              form={formularioUseForm}
              required
              options={optionsCarro ?? []}
              handleOnChange={handleChangeCarro}
              label="Carro"
            />
          </Grid>
          <Grid item xs={12}>
            <Divider />
          </Grid>
          <Grid item xs={12}>
            <ControlledTextField
              name="valorFactura"
              form={formularioUseForm}
              typeNumericMask
              required
              label={"Valor de la Factura"}
            />
          </Grid>
          <Grid item xs={12}>
            <ControlledTextField
              name="observacion"
              form={formularioUseForm}
              required
              label={"Observacion"}
            />
          </Grid>
          <Grid item xs={12}>
            <Divider />
          </Grid>
          <Grid item xs={12}>
            <ControlledDatePicker
              name="fechaPago"
              form={formularioUseForm}
              required
              label={"Fecha de Vencimiento"}
            />
          </Grid>
          <Grid item xs={12} >
            <ControlledSwitch
              name="blindado"
              form={formularioUseForm}
              label="¿Blindaje?"
            />
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <ControlledRadioButtons
            name="metodoPagoId"
            form={formularioUseForm}
            required
            row
            label={"Fecha de Vencimiento"}
            radioGroupOptions={metodoPagosOptions}
          />
        </Grid>
      </CardContent>
      <CardActions>
        <Button size="small" type="button" onClick={handleReset}>Cancelar</Button>
        <Button size="small" type="button" onClick={handleSubmit}>Submit</Button>
      </CardActions>
    </Card>
  );
}

export default Home


