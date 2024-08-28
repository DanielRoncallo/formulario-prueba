 
import { useForm } from "react-hook-form";
import {getCarros, getTipoIdentificacion} from "@/http/autocompleteData"
import { useQuery } from "@tanstack/react-query";
import { forwardRef, useEffect, useMemo, useRef, useState } from "react";
import useDebounce from "@/core/hooks/useDebounce";
import { NumericFormat, NumericFormatProps } from 'react-number-format';

interface CustomProps {
  onChange: (event: { target: { name: string; value: string } }) => void;
  name: string;
}


export const useHome = () => {
  const [inputValueCarro, setInputValueCarro] = useState<string | undefined>(undefined)
  const [optionsCarro, setOptionsCarro] = useState<any>([])


  type FormularioType = {
    colorOpcion: number, 
    tipodIdentificacion: number,
    carroId: number,
    valorFactura: string,
    observacion: string,
    blindado: boolean | undefined,
    metodoPagoId: number, 
  };
      
  const formularioUseForm = useForm<FormularioType>({
    defaultValues: { 
      valorFactura: "",
      observacion: "",
      blindado: false,
      metodoPagoId: 1,
    },
  });

  const inputValueCarroDebounce = useDebounce(inputValueCarro, 500);

  const { data: tiposIdentificacion } = useQuery({
    queryKey: ["getTipoIdentificacion"],
    queryFn: getTipoIdentificacion,
  });

  const { data: carros } = useQuery({
    queryKey: ["getCarros", inputValueCarroDebounce],
    queryFn: getCarros,
    enabled: !!inputValueCarroDebounce
  });

  const handleChangeCarro = (value: string) => {
    setInputValueCarro(value) 
  }

  const formularioHandleSubmit = formularioUseForm?.handleSubmit;
  const formularioHandleReset = formularioUseForm?.reset;

  const handleSubmit = formularioHandleSubmit &&
  formularioHandleSubmit((formData) =>  console.log("formData", formData));
 
  const handleReset = () =>{ formularioHandleReset && 
  formularioHandleReset()}

  useEffect(() => {
    setOptionsCarro(carros)
  }, [carros])

  console.log(formularioUseForm.formState.errors);
  
  
 return {
    formularioUseForm, 
    tiposIdentificacion,
    handleChangeCarro,
    optionsCarro,
    handleSubmit,
    handleReset,
  }
  
}
 
