import { View, Card, Flex, Text, Heading } from "@aws-amplify/ui-react";
import { API, graphqlOperation } from "aws-amplify";
import { listPosts } from "../graphql/queries";
import { useState, useEffect } from "react";

export default function Feed() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetchPosts();
  }, []);

  async function fetchPosts() {
    try {
      const postData = await API.graphql(graphqlOperation(listPosts));
      const posts = postData.data.listPosts.items;
      setPosts(posts);
    } catch (err) {
      console.log("error fetching posts");
    }
  }

  return (
    <View>
      {posts.map((post, index) => (
        <div className="max-w-[40vh]">
          <Card variation="elevated" key={post.id ? post.id : index}>
            <Flex direction="row" justifyContent="space-between">
              <Flex direction="column">
                <Heading isTruncated={true} level={4}>
                  Title: {post.title}
                </Heading>
                <Text>User: {post.username}</Text>
                <Text>Content: {post.content}</Text>
              </Flex>
            </Flex>
          </Card>
        </div>
      ))}
    </View>
  );
}
