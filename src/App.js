/*
  This is the main app container,
  most components and pages render
  within App as children
*/
import { View } from "@aws-amplify/ui-react";
import { Amplify, Storage } from "aws-amplify";
import Navbar from "./components/navbar";
import awsExports from "./aws-exports";
import { Outlet } from "react-router-dom";

Amplify.configure({ ...awsExports, ssr: true });

export default function App() {
  
  return (
    <View>
      <Navbar />
      <div className="wrapper mt-4 mx-2">
        {/*
          Where child pages are rendered
        */}
        <Outlet />
      </div>
    </View>
  );
}
