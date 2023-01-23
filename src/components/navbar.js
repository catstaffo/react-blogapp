import { View, Heading } from "@aws-amplify/ui-react";
import "./navbar.css";
import { Link } from "react-router-dom";
import { Amplify } from "aws-amplify";
import awsExports from "../aws-exports";
import { useState, useEffect } from "react";
Amplify.configure(awsExports);

export default function Navbar() {
  const [isOpen, setOpen] = useState(false);

  return (
    <nav className="flex justify-between items-stretch gap-9 px-5 py-4 shadow-md">
      <Link to="/" className="site-title">
        <Heading level={2}>
          {" "}
          <Link to="/">Site Name</Link>
        </Heading>
      </Link>
      <ul className="px-0 py-0 mx-0 my-0 list-none flex gap-9">
        <li>
          <Link to="/feed" className="text-lg">
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
