import { Heading } from "@aws-amplify/ui-react";
import "../styles/navbar.css";
import { Link } from "react-router-dom";
import { Auth, Amplify } from "aws-amplify";
import awsExports from "../aws-exports";
import { useState, useEffect } from "react";
import { redirect } from "react-router-dom";

Amplify.configure(awsExports);

export default function Navbar() {
  //const [isOpen, setOpen] = useState(false);
  const [signedInUser, setSignedInUser] = useState(false);
  //const [openModal, setOpenModal] = useState(false);

  async function onSignOutClick() {
    await Auth.signOut();
    try {
      signedInUser = false;
      redirect("/");
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    checkUser();
  }, []);

  async function checkUser() {
    const user = await Auth.currentAuthenticatedUser();
    if (!user) {
      signedInUser = false;
      setSignedInUser(signedInUser);
    } else {
      signedInUser = true;
      setSignedInUser(signedInUser);
    }
  }

  return (
    <nav className="flex justify-between items-stretch gap-9 px-5 py-4 shadow-md">
      <Link to="/" className="site-title">
        <Heading level={2}>Site Name</Heading>
      </Link>
      <ul className="px-0 py-0 mx-0 my-0 list-none flex gap-9">
        <li>
          <Link to="/create-post" className="text-lg">
            Create Post
          </Link>
        </li>
        <li>
          <Link to="/blogroll" className="text-lg">
            Blog Feed
          </Link>
        </li>
        <li>
          <Link to="/my-posts" className="text-lg">
            My Posts
          </Link>
        </li>
        <li>
          <Link to="/profile" className="text-lg">
            Profile
          </Link>
        </li>
        {signedInUser ? (
          <li>
            <button type="button" onClick={onSignOutClick} className="text-lg">
              Log out
            </button>
          </li>
        ) : (
          <li>
            <Link to="/welcome" className="text-lg">
              Log in
            </Link>
          </li>
        )}
      </ul>
    </nav>
  );
}
