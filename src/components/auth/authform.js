import { Authenticator } from "@aws-amplify/ui-react";
import "./authform.css";
import { Header } from "./header";
import { Footer } from "./footer";
import { SignInHeader } from "./signinheader";
import { SignInFooter } from "./signinfooter";

const components = {
  Header,
  SignIn: {
    Header: SignInHeader,
    Footer: SignInFooter,
  },
  Footer,
};

export default function AuthForm() {
  return (
    <Authenticator components={components}>
      {({ signOut, user }) => (
        <main>
          <h1>Hello {user.username}</h1>
          <button onClick={signOut}>Sign out</button>
        </main>
      )}
    </Authenticator>
  );
}
