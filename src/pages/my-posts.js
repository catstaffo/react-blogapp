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
    console.log(username);
  }
  return (
    <View>
      {posts.map((post) => (
        <div className="max-w-[40vh]" key={post.id}>
          <Card variation="elevated">
            <Flex direction="row" justifyContent="space-between">
              <Flex direction="column">
                <Heading isTruncated={true} level={4}>
                  Title: {post.title}
                </Heading>
                <Text>User: {post.username}</Text>
                <Text>Content: {post.content}</Text>
                <Text>
                  View Post |
                  <Link to={`/my-posts/edit/${post.id}`}>Edit Post</Link>|
                  Delete Post
                </Text>
              </Flex>
            </Flex>
          </Card>
        </div>
      ))}
    </View>
  );
}
