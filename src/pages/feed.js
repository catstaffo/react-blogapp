import { View, Card, Flex, Text, Heading } from "@aws-amplify/ui-react";
import { Amplify, API, graphqlOperation } from "aws-amplify";
import { listPosts } from "../graphql/queries";

import awsExports from "../aws-exports";
import { useState, useEffect } from "react";
Amplify.configure(awsExports);

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
                  {post.title}
                </Heading>
                <Text>{post.username}</Text>
                <Text>{post.content}</Text>
              </Flex>
            </Flex>
          </Card>
        </div>
      ))}
    </View>
  );
}
