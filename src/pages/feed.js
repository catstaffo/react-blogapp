import { API, graphqlOperation } from "aws-amplify";
import { listPosts } from "../graphql/queries";
import { useState, useEffect } from "react";
import GenericFeed from "../components/blogmap";

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

  return <GenericFeed posts={posts} />;
}
