/* 
  This page gets and displays
  an individual post in its entirety
*/
import { API, graphqlOperation, Storage } from "aws-amplify";
import { View, Card, Flex, Heading } from "@aws-amplify/ui-react";
import { useNavigate, useParams } from "react-router-dom";
import { getPost } from "../graphql/queries";
import { useState, useEffect } from "react";
import { createComment } from "../../src/graphql/mutations";
import SimpleMDE from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";
import { useUser } from "../context";
import { v4 as uuid } from "uuid";
import Comments from "../components/commentlist";

const initialState = { message: "" };

export default function Post() {
  /*
    retrieve the postid from the referring
    url, which has the id encoded in it
  */
  let { postid } = useParams();
  const [postImage, setPostImage] = useState(null);
  const [myPost, setMyPost] = useState([]);
  const [postComment, setPostComment] = useState(initialState);
  const [showCommentCreate, setShowCommentCreate] = useState(false);
  const { message } = postComment;
  const { user } = useUser();
  const navigate = useNavigate();

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
      if (myPost.postImage) {
      const postImage = await Storage.get(myPost.postImage);
      setPostImage(postImage);
    }
      console.log(myPost.postImage)
    } catch (err) {
      console.log(err);
    }
  }

  async function postCommentCreate() {
    if (!message) return;
    const id = uuid();
    postComment.id = id;
    try {
      await API.graphql({
        query: createComment,
        variables: { input: postComment },
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
                 <img src={postImage} className='mt4' />
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
                value={postComment.message}
                onChange={(value) =>
                  setPostComment({
                    ...postComment,
                    message: value,
                    username: user.username,
                    postId: `${postid}`,
                  })
                }
              />
              <button
                onClick={postCommentCreate}
                type="button"
                className="shadow border mb-4 font-semibold px-8 py-2 rounded-lg text-blue-900"
              >
                Post
              </button>
            </div>
          }
          <div>
            <Comments />
          </div>
        </div>
      </div>
    </View>
  );
}
