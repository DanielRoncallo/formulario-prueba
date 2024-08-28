export const getControlledAutocompleteOptions = (
  data: any,
  labelKey: string,
  valueKey: string,
) => {
  if (data == null) return [];
  if (!Array.isArray(data)) throw new Error("data is not a valid Array");

  return data.map((item) => {
    if (!item.hasOwnProperty(labelKey))
      throw new Error(`item data has not property ${labelKey}`);
    if (!item.hasOwnProperty(valueKey))
      throw new Error(`item data has not property ${valueKey}`);

    return {
      label: item[labelKey],
      value: item[valueKey],
    };
  });
};
