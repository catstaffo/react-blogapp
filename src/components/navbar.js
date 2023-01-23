import { View, Heading } from "@aws-amplify/ui-react";
import "./navbar.css";
import { Amplify } from "aws-amplify";
import awsExports from "../aws-exports";
import { useState, useEffect } from "react";
Amplify.configure(awsExports);

export default function Navbar() {
  const [isOpen, setOpen] = useState(false);

  return (
    <nav className="flex justify-between items-stretch gap-9 px-5 py-4 shadow-md">
      <a href="/" className="site-title">
        <Heading level={2}> Site Name </Heading>
      </a>
      <ul className="px-0 py-0 mx-0 my-0 list-none flex gap-9">
        <li>
          <a href="/profile" className="text-lg">
            Profile
          </a>
        </li>
        <li>
          <a href="/my-posts">My Posts</a>
        </li>
      </ul>
    </nav>
  );
}
