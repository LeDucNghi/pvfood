import * as React from "react";

export interface IuseDebounceProps {
  time: number;
}

export function useDebounce({ time }: IuseDebounceProps) {
  const [show, setShow] = React.useState(false);

  React.useEffect(() => {
    const timer = setTimeout(() => {
      setShow(true);
    }, time);

    return () => clearTimeout(timer);
  }, []);

  return { show };
}
