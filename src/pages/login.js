import "@aws-amplify/ui-react/styles.css";
import AuthForm from "../components/auth/authform";
import { useUser } from "../context"
import "../styles/index.css";
import { Navigate } from "react-router-dom";


export default function Login() {
  const { user } = useUser();

  return (
  <div>
      {user ? (
        <Navigate to= "/" replace={true} />
      ): (
        <AuthForm/>
      )}
  </div>
  )
}
