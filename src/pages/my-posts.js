import { View, Card, Flex, Heading } from "@aws-amplify/ui-react";
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
    try {
      const usernameInfo = await Auth.currentAuthenticatedUser();
      const username = usernameInfo.attributes.sub.toString()
      /* contains is necessary in this query because dynamodb info
      for username attached to posts is actually in form of
      "usernameInfo.attributes.sub::usernameInfo.username" */
      const postData = await API.graphql(graphqlOperation(listPosts, { filter: { username: {contains: username} }}))
      const posts = postData.data.listPosts.items;
      setPosts(posts);
    }
   catch (err) {
      console.log(err);
    }
  }
  return (
    <View>
      {posts.map((post) => (
        <div className="max-w-[80vh] m-5" key={post.id}>
          <Card variation="elevated">
            <Flex direction="row" justifyContent="space-between">
              <Flex direction="column">
                <Heading isTruncated={true} level={4}>
                  Title: {post.title}
                </Heading>
                <p className="break-words">User: {post.username}</p>
                <p className="break-words">Content: {post.content}</p>
                <p className="break-words">
                  <Link to= {`/post/${post.id}`} className="inline p-0 m-0">View More</Link> |
                  <Link to={`/posts/edit/${post.id}`} className="inline p-0 m-0">{" "}Edit Post{" "}</Link>|
                  Delete Post
                </p>
              </Flex>
            </Flex>
          </Card>
        </div>
      ))}
    </View>
  );
}
