import "@aws-amplify/ui-react/styles.css";
import AuthForm from "../components/auth/authform";
import { useUser } from "../context"
import "../styles/index.css";
import { Navigate, useLocation } from "react-router-dom";


export default function Login() {
  const { user } = useUser();
  let { state } = useLocation();

  return (
  <div>
      {user ? (
        <Navigate to= {state.history} replace={true} />
      ): (
        <AuthForm/>
      )}
  </div>
  )
}
