import { Heading } from "@aws-amplify/ui-react";
import "../styles/navbar.css";
import { Link } from "react-router-dom";
import { Amplify } from "aws-amplify";
import awsExports from "../aws-exports";
//import { useState } from "react";
Amplify.configure(awsExports);

export default function Navbar() {
  /*const [isOpen, setOpen] = useState(false);
  const [signedUser, setSignedUser] = useState(false);
  const [openModel, setOpenModal] = useState(false);*/

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
      </ul>
    </nav>
  );
}
