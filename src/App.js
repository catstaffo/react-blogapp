import { View, Card, Flex, Text, Heading } from "@aws-amplify/ui-react";
import { Amplify, API, graphqlOperation } from "aws-amplify";
import { listPosts } from "./graphql/queries";
import Navbar from "./components/navbar";
import Feed from "./pages/feed";
import MyPosts from "./pages/my-posts";
import Profile from "./pages/profile";
import awsExports from "./aws-exports";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { useState, useEffect } from "react";
Amplify.configure(awsExports);

function App() {
  let Component;
  switch (window.location.pathname) {
    case "/":
      Component = App;
      break;
    case "/my-posts":
      Component = MyPosts;
      break;
    case "/profile":
      Component = Profile;
      break;
    case "/feed":
      Component = Feed;
      break;
  }
  return (
    <View>
      <Navbar />
      <div className="mt-4 mx-2">
        <Component />
      </div>
      <p>I want this 2 work plz</p>
    </View>
  );
}

export default App;
