import { useEffect, useRef, useState } from "react";

const useDebounce = <T = string | number>(value: T, delay = 500) => {
  const [debouncedValue, setDebouncedValue] = useState<T>();
  const timerRef = useRef<NodeJS.Timeout>();

  useEffect(() => {
    timerRef.current = setTimeout(() => setDebouncedValue(value), delay);

    return () => {
      clearTimeout(timerRef.current);
    };
  }, [value, delay]);

  return debouncedValue;
};

export default useDebounce;
