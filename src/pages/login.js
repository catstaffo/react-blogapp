import "@aws-amplify/ui-react/styles.css";
import AuthForm from "../components/auth/authform";
import { useUser } from "../context"
import "../styles/index.css";
import { Navigate, useLocation } from "react-router-dom";
import Background from "../images/loginbg.jpg"


export default function Login() {
  const {user} = useUser();
  let { state } = useLocation();
  let place = "/"
  if (typeof (state) != 'undefined' && state != null) {
    place = state.history
  }

  return (
    <div style={{
      backgroundImage: "url(" + Background + ")",
      backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        width: '100vw',
        height: '100vh'
    }}>
      {user ? (
        <Navigate to={place} replace={true} />
      ): (
        <AuthForm/>
      )}
  </div>
  )
}
