/* 
  This page gets and displays
  an individual post in its entirety
*/
import { API, graphqlOperation } from "aws-amplify";
import { View, Card, Flex, Heading } from "@aws-amplify/ui-react";
import { useNavigate, useParams } from "react-router-dom";
import { getPost } from "../graphql/queries";
import { useState, useEffect } from "react";
import { createComment } from "../../src/graphql/mutations";
import SimpleMDE from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";
import { useUser } from "../context";
import { v4 as uuid } from "uuid";

const initialState = { message: "" };

export default function Post() {
  /*
    retrieve the postid from the referring
    url, which has the id encoded in it
  */
  let { postid } = useParams();
  const [myPost, setMyPost] = useState([]);
  const [comment, setComment] = useState(initialState);
  const [showCommentCreate, setShowCommentCreate] = useState(false);
  const { message } = comment;
  const { user } = useUser();
  const navigate = useNavigate();

  console.log(user);
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

  async function postComment() {
    if (!message) return;
    const id = uuid();
    comment.id = id;
    try {
      await API.graphql({
        query: createComment,
        variables: { input: comment },
        authMode: "AMAZON_COGNITO_USER_POOLS",
      });
    } catch (error) {
      console.log(error);
    }
    navigate(`/post/${myPost.id}`);
  }

  function toggle() {
    setShowCommentCreate(!showCommentCreate);
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
        <div>
          {user && (
            <button
              type="button"
              className="shadow border mt-2 mb-4 font-semibold px-8 py-2 rounded-lg text-blue-900"
              onClick={toggle}
            >
              Reply
            </button>
          )}

          {
            <div style={{ display: showCommentCreate ? "block" : "none" }}>
              <SimpleMDE
                value={comment.message}
                onChange={(value) =>
                  setComment({
                    ...comment,
                    message: value,
                    postId: `${postid}`,
                  })
                }
              />
              <button
                onClick={postComment}
                type="button"
                className="shadow border mb-4 font-semibold px-8 py-2 rounded-lg text-blue-900"
              >
                Post
              </button>
            </div>
          }
        </div>
      </div>
    </View>
  );
}
