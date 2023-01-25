import { Amplify, API, graphqlOperation } from "aws-amplify";
import { useLocation, useLoaderData } from "react-router-dom";
import ReactMarkDown from "react-markdown";
import awsExports from "../aws-exports";
import { getPost } from "../graphql/queries";
import { useState, useEffect } from "react";
//import { CreatePost } from "../pages/createpost";

Amplify.configure({ ...awsExports, ssr: true });

/*export async function loader({ id }) {
  const myPostID = await CreatePost();
  return myPostID;
}
*/
export default function Post() {
  //const myPostID = useLoaderData();

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
