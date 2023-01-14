import { useEffect, useState } from "react";
import { RandomQuote as Component } from "../components/RandomQuote";

export function RandomQuote(props) {
  const [state, setState] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://api.chucknorris.io/jokes/random")
      .then((response) => response.json())
      .then((json) =>
        setState({
          quote: json.value,
          author: "Anonymous",
        }),
      )
      .catch((error) => setError(error));
  }, []);

  if (state === null) {
    return <div>Please wait...</div>;
  }

  if (error !== null) {
    return <div>Oh no!</div>;
  }

  return <Component quote={state.quote} author={state.author} />;
}
