/*
  Component that displays comments for a post
*/
import { listComments } from "../graphql/queries";
import { useState, useEffect } from "react";
import { API } from "aws-amplify";
import { Card } from "@aws-amplify/ui-react";
import { useParams } from "react-router-dom";

export default function Comments() {
  const [comments, setComments] = useState([]);
  let { postid } = useParams();
  console.log(comments)
  console.log(postid)

  useEffect(() => {
    // eslint-disable-next-line
    fetchComments();
    // eslint-disable-next-line
  }, []);

  async function fetchComments() {
    try {
      const postData = await API.graphql({
      query: listComments,
      variables: { filter: {postId: {eq: postid}} },
      authMode: "API_KEY",
      });
      const comments = postData.data.listComments.items;
      setComments(comments);
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <div>
      {comments[0] ? <h2 className="font-medium">Comments</h2> : ""}
      {comments.map((comment) => (
        <div
          key={comment.id}
          className="my-5"
        >
          <Card variation="elevated">
            <div>
              <p className="text-gray-600 mt-2 break-words">comment body: {comment.message}</p>
              <p className="text-gray-700 mt-1 break-words">username: {comment.username}</p>
            </div>
          </Card>
        </div>
      ))}
  </div>);
  
}
