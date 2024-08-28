"use client";
import { Button, Card, CardActions, CardContent, CardHeader, Divider, FormControl, Grid } from "@mui/material";
 
import ControlledAutocomplete from "../components/react-hook-form/mui/controlled-autocomplete";
import {colorOptions} from "../constant/colorOptions"
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
            <FormControl fullWidth>
              <ControlledAutocomplete
                name="colorOpcion"
                form={formularioUseForm}
                rules={{ required: true }}
                autocompleteProps={{
                  renderInput: () => null,
                  options: colorOptions ?? [], 
                }}
                textFieldProps={{
                  label: "Color",                  
                }}
              />
            </FormControl>
          </Grid>
          <Grid item xs={12}>
            <FormControl fullWidth>
              <ControlledAutocomplete
                name="tipodIdentificacion"
                form={formularioUseForm}
                rules={{ required: true }}
                autocompleteProps={{
                  renderInput: () => null,
                  options: tiposIdentificacion ?? [], 
                }}
                textFieldProps={{
                  label: "Tipo de Identificacion",
                }}
              />
            </FormControl>
          </Grid>
           <Grid item xs={12}>
            <FormControl fullWidth>
              <ControlledAutocomplete
                name="carroId"
                form={formularioUseForm}
                rules={{ required: true }}
                autocompleteProps={{
                  renderInput: () => null,
                  options: optionsCarro ?? [], 
                }}                
                textFieldProps={{
                  label: "Carro",
                  onChange: (e) => handleChangeCarro(e.target.value)                  
                }}
              />
            </FormControl>
          </Grid>
          <Grid item xs={12}>
            <Divider/>
          </Grid>
          <Grid item xs={12}>
            <FormControl fullWidth>
              <ControlledTextField
                name="valorFactura"
                form={formularioUseForm}
                typeNumericMask
                rules={{ required: true }}
                textFieldProps={{ 
                  label: "Valor de la Factura",
                }}
              />
            </FormControl>
          </Grid>
          <Grid item xs={12}>
            <FormControl fullWidth>
              <ControlledTextField
                name="observacion"
                form={formularioUseForm}
                rules={{ required: true }}
                textFieldProps={{
                  label: "observacion",                  
                }}
              />
            </FormControl>
          </Grid>
          <Grid item xs={12}>
            <Divider/>
          </Grid>
          <Grid item xs={12}>
            <FormControl fullWidth>
              <ControlledDatePicker
                 name="fechaPago"
                 form={formularioUseForm}
                 datePickerProps={{
                   label: "Fecha de Vencimiento",
                 }}
                 rules={{ required: true }}
              />
            </FormControl>
          </Grid>
          <Grid item xs={12} >
              <FormControl fullWidth>
                <ControlledSwitch
                  name="blindado"
                  form={formularioUseForm}
                  label="¿Blindaje?"               
                />
              </FormControl>
            </Grid>          
        </Grid>
        <Grid item xs={12}>
          <FormControl sx={{ flexWrap: "wrap", flexDirection: "row" }}>
            <ControlledRadioButtons
              name="metodoPagoId"
              form={formularioUseForm}
              rules={{ required: true }}
              radioGroupProps={{ row: true }}
              radioGroupOptions={metodoPagosOptions}
            />
          </FormControl>
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

 
