/*
  This is the page that unauthorized
  users are sent to for sign in and
  sign up
*/
import "@aws-amplify/ui-react/styles.css";
import AuthForm from "../components/auth/authform";
import { useUser } from "../context";
import "../styles/index.css";
import { Navigate, useLocation } from "react-router-dom";
import Background from "../images/loginbg.jpg";

export default function Login() {
  const { user } = useUser();
  /*
    the state that is passed in by a
    Link referring to /login
  */
  let { state } = useLocation();
  /*
    If user arrives at "/login" from
    no session history, then upon log in,
    redirect user to homepage, else,
    redirect user to their prior place,
    stored in state
  */
  let place = "/";
  if (typeof state != "undefined" && state != null) {
    place = state.history;
  }

  return (
    <div
      style={{
        backgroundImage: "url(" + Background + ")",
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        width: "100vw",
        height: "100vh",
      }}
    >
      {/*
        "replace={true}" overwrites the history,
        so if users press the back button, then
        they are not referred back to the log in page
      */}
      {user ? <Navigate to={place} replace={true} /> : <AuthForm />}
    </div>
  );
}
