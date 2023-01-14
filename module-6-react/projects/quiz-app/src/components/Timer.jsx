import { useState, useEffect, useRef } from "react";

export function Timer(props) {
  const [time, setTime] = useState(0);
  const refTime = useRef(time);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime((state) => state + 1);
    }, 1000);

    return () => {
      clearInterval(intervalId);
      props.onFinish(refTime.current);
    };
  }, []);

  useEffect(() => {
    props.onTick(time);
    refTime.current = time;
  }, [time, props]);

  return <div>{time} s</div>;
}
