import { View, Card, Flex, Text, Heading } from "@aws-amplify/ui-react";
import { Amplify, API, graphqlOperation } from "aws-amplify";
import { listPosts } from "./graphql/queries";
import Navbar from "./components/navbar";
import Home from "./pages/home";
import Feed from "./pages/feed";
import MyPosts from "./pages/my-posts";
import Profile from "./pages/profile";
import awsExports from "./aws-exports";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { useState, useEffect } from "react";
Amplify.configure({ ...awsExports, ssr: true });

function App() {
  return (
    <View>
      <Router>
        <Navbar />
        <div className="wrapper mt-4 mx-2">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/feed" element={<Feed />} />
            <Route path="/my-posts" element={<MyPosts />} />
            <Route path="/profile" element={<Profile />} />
            <Route
              path="*"
              element={
                <div>
                  <h2>404 Page not found etc</h2>
                </div>
              }
            />
          </Routes>
        </div>
      </Router>
    </View>
  );
}

export default App;
