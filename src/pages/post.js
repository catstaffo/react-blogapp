/* 
  This page gets and displays
  an individual post in its entirety
*/
import { API, graphqlOperation } from "aws-amplify";
import { View, Card, Flex, Heading } from "@aws-amplify/ui-react";
import { useParams } from "react-router-dom";
import { getPost } from "../graphql/queries";
import { useState, useEffect } from "react";

export default function Post() {
  /*
    retrieve the postid from the referring
    url, which has the id encoded in it
  */
  let { postid } = useParams();
  const [myPost, setMyPost] = useState([]);

  useEffect(() => {
    fetchPost();
    // eslint-disable-next-line
  }, []);

  async function fetchPost() {
    try {
      const myPostData = await API.graphql(
        graphqlOperation(getPost, { id: `${postid}` })
      );
      const myPost = myPostData.data.getPost;
      setMyPost(myPost);
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <View>
      <div className="max-w-[80vh] m-5">
        <Card variation="elevated">
          <Flex direction="row" justifyContent="space-between">
            <Flex direction="column">
              <Heading isTruncated={true} level={4}>
                Title: {myPost.title}
              </Heading>
              <p className="break-words">User: {myPost.username}</p>
              <p className="break-words">Content: {myPost.content}</p>
            </Flex>
          </Flex>
        </Card>
      </div>
    </View>
  );
}
