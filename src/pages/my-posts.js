import { View, Card, Flex, Heading } from "@aws-amplify/ui-react";
import { useState, useEffect } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { API, Auth, graphqlOperation } from "aws-amplify";
import { listPosts } from "../graphql/queries";
import { deletePost } from "../graphql/mutations";
import {useUser} from "../context"


export default function MyPosts() {
  const navigate= useNavigate()
  const { user } = useUser();

  const [posts, setPosts] = useState([]);
  useEffect(() => {
    fetchPosts();
  }, []);

  async function fetchPosts() {
      if (user == null) {
        navigate("/login");
      } else {
        const username = user.attributes.sub.toString()
        /* contains is necessary in this query because dynamodb info
        for username attached to posts is actually in form of
        "usernameInfo.attributes.sub::usernameInfo.username" */
        const postData = await API.graphql(graphqlOperation(listPosts, { filter: { username: { contains: username } } }))
        const posts = postData.data.listPosts.items;
        setPosts(posts);
      }
  }

  async function deleteIt(id) {
    try {
      await API.graphql({
      query: deletePost,
      variables: { input: { id } },
      authMode: "AMAZON_COGNITO_USER_POOLS"
    })
      fetchPosts()
    } catch (err) {
      console.log(err)
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
                  <Link to={`/posts/edit/${post.id}`} className="inline p-0 m-0">{" "}Edit Post{" "}</Link>|{" "}
                  <button onClick={() => deleteIt(post.id )} className="inline p-0 m-0">Delete Post</button>
                </p>
              </Flex>
            </Flex>
          </Card>
        </div>
      ))}
    </View>
  );
}
