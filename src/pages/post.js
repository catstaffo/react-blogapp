import { API, graphqlOperation } from "aws-amplify";
import { useParams } from "react-router-dom";
import { getPost } from "../graphql/queries";
import { useState, useEffect } from "react";

export default function Post() {
  let { postid } = useParams();
  const [myPost, setMyPost] = useState([]);

  useEffect(() => {
    fetchPost();
  }, []);

  async function fetchPost() {
    try {
      const myPostData = await API.graphql(
        graphqlOperation(getPost, { id: `${postid}` })
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
