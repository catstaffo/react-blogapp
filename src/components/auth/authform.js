/*
  This is the primary control for my
  customization of the authorization module,
  in terms of what options are available
  to users,
  and in terms of styling.
  Gathers all the pieces together
*/

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

export default function AuthForm({ children }) {
  return (
    <Authenticator components={components} variation="modal">
      {children}
    </Authenticator>
  );
}
