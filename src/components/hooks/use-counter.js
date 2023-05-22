import { useState, useEffect } from "react";

const useCounter = (init, assending = true) => {
  const [counter, setCounter] = useState(init);

  useEffect(() => {
    const interval = setInterval(() => {
      if (assending) {
        setCounter((prevCounter) => prevCounter + 1);
      } else {
        setCounter((prevCounter) => prevCounter - 1);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [assending]);

  return counter;
};

export default useCounter;
