import { Link } from "react-router-dom";
import { Heading } from "../components/Heading";

export function HomePage() {
  return (
    <div>
      <Heading element="h1" size="1">
        Home page
      </Heading>
      <Link to="/help">Help page</Link>
      <Link to="/help/react">React Help page</Link>
      <Link to="/help/html">HTML Help page</Link>
      <Link to="/help/css">CSS Help page</Link>
    </div>
  );
}
