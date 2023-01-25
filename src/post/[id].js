import { View, Card, Flex, Text, Heading } from "@aws-amplify/ui-react";
import { Amplify, API, graphqlOperation } from "aws-amplify";
import { useLocation } from "react-router-dom";
import ReactMarkDown from "react-markdown";
import awsExports from "../aws-exports";
import { getPost } from "../graphql/queries";
import { useState, useEffect } from "react";

Amplify.configure({ ...awsExports, ssr: true });

export default function Post() {
  const { state } = useLocation();
  const { id } = state;
  const [myPost, setMyPost] = useState([]);

  useEffect(() => {
    fetchPost();
  });

  async function fetchPost() {
    try {
      const myPostData = await API.graphql(
        graphqlOperation(getPost, { id: `${id}` })
      );
      const myPost = myPostData.data.getPost;
      console.log(myPost);
      setMyPost(myPost);
    } catch (err) {
      console.log(err);
    }
  }

  return <div>hi {myPost.title}</div>;
}
