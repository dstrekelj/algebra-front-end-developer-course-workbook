import { useEffect, useState } from "react";
import { NasaImage as Component } from "../components/NasaImage";

export function NasaImage(props) {
  const [state, setState] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&count=5")
      .then((response) => response.json())
      .then((json) =>
        setState({
          copyright: json[0].copyright,
          title: json[0].title,
          url: json[0].url,
        }),
      )
      .catch((error) => setError(error));
  }, []);

  if (state === null) {
    return <div>Please wait...</div>;
  }

  if (error !== null) {
    return <div>Something went wrong.</div>;
  }

  return (
    <Component imageSrc={state.url} title={state.title} copyright={state.copyright} />
  );
}
