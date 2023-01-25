import "@aws-amplify/ui-react/styles.css";
import AuthForm from "../components/auth/authform";
import { withAuthenticator, AmplifySignOut } from "@aws-amplify/ui-react";
import { Auth } from "aws-amplify";
import { useState, useEffect } from "react";
import "../styles/index.css";

export default function Login() {
  const [user, setUser] = useState(null);
  useEffect(() => {
    checkUser();
  }, []);
  async function checkUser() {
    const user = await Auth.currentAuthenticatedUser();
    setUser(user);
  }
  if (!user) return <AuthForm></AuthForm>;
  return (
    <div>
      <p>Hi</p>
    </div>
  );
}
