import { View, Card, Flex, Heading } from "@aws-amplify/ui-react";
import { API, graphqlOperation } from "aws-amplify";
import { listPosts } from "../graphql/queries";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

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
        <div className="max-w-[80vh] m-5">
          <Card variation="elevated" key={post.id ? post.id : index}>
            <Flex direction="row" justifyContent="space-between">
              <Flex direction="column">
                <Heading isTruncated={true} level={4}>
                  Title: {post.title}
                </Heading>
                <p className="break-words p-0 m-0">User: {post.username}</p>
                <p className="break-words p-0 m-0">Content: {post.content}</p>
                <p className="break-words p-0 m-0"><Link to= {`/post/${post.id}`} className="inline p-0 m-0">View More</Link></p>
              </Flex>
            </Flex>
          </Card>
        </div>
      ))}
    </View>
  );
}
