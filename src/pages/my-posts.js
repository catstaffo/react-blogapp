import { View, Card, Flex, Text, Heading } from "@aws-amplify/ui-react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { API, Auth, graphqlOperation } from "aws-amplify";
import { listPosts } from "../graphql/queries";

export default function MyPosts() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    fetchPosts();
  }, []);
  async function fetchPosts() {
    const username = await Auth.currentAuthenticatedUser();
    const postData = await API.graphql(
      graphqlOperation(listPosts, { username: username })
    );
    const posts = postData.data.listPosts.items;
    setPosts(posts);
    console.log(posts);
  }
  return (
    <View>
      {posts.map((post, index) => (
        <div className="max-w-[40vh]">
          <Card variation="elevated" key={index}>
            <Flex direction="row" justifyContent="space-between">
              <Flex direction="column">
                <Heading isTruncated={true} level={4}>
                  Title: {post.title}
                </Heading>
                <Text>User: {post.username}</Text>
                <Text>Content: {post.content}</Text>
                <Link to="/">View Post</Link>
                <Link to="/">Edit Post</Link>
                <Link to="/">Delete Post</Link>
              </Flex>
            </Flex>
          </Card>
        </div>
      ))}
    </View>
  );
}
