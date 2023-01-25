import { useRouteError } from "react-router-dom";
import Navbar from "../components/navbar";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div>
      <Navbar />
      <div className="wrapper mt-4 mx-2">
        <h1>Oops!</h1>
        <p>Sorry, an unexpected error has occurred.</p>
        <p>
          <i>Error Type ? </i>
          <i>{error.statusText || error.message}</i>
        </p>
      </div>
    </div>
  );
}
