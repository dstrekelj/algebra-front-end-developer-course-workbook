import { Link, useParams } from "react-router-dom";
import { Heading } from "../components/Heading";

export function HelpPage() {
  const params = useParams();

  let title = "Help";

  if (params.topic) {
    title = `Help for ${params.topic}`;
  }

  return (
    <div>
      <Heading element="h1" size="1">
        {title}
      </Heading>
      <Link to="/">Home page</Link>
    </div>
  );
}
