import {tipoIdentificacionOptions} from "@/constant/tipoIdentificacionOptions"
import {carroOptions} from "@/constant/carroOptions"


type autocompletePromise = {
  label: string;
  value: number;
}


export const getTipoIdentificacion = async ({
  queryKey,
}: {
  queryKey: [string];
}): Promise<autocompletePromise[]> => {
   
    return tipoIdentificacionOptions;
};

export const getCarros = async ({
  queryKey,
}: {
  queryKey: [string, string | undefined];
}): Promise<autocompletePromise[]> => {
   
const [, inputValueCarro] = queryKey

const opcionesCarro = carroOptions.filter((row) => { 
  return row.label.toLowerCase().includes(inputValueCarro ? inputValueCarro.toLowerCase() : "")
}).slice(0 , 10)

return opcionesCarro;
};