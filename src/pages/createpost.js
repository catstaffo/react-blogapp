import { withAuthenticator } from "@aws-amplify/ui-react";
import { useState, React } from "react";
import { API } from "aws-amplify";
import { v4 as uuid } from "uuid";
import { createPost } from "../graphql/mutations";
import { useNavigate } from "react-router-dom";
import SimpleMDE from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";

const initialState = { title: "", content: "" };

export function CreatePost() {
  const [post, setPost] = useState(initialState);
  const { title, content } = post;
  const navigate = useNavigate();

  function onChange(e) {
    setPost(() => ({
      ...post,
      [e.target.name]: e.target.value,
    }));
  }

  async function createNewPost() {
    if (!title || !content) return;
    const postid = uuid();
    post.id = postid;

    await API.graphql({
      query: createPost,
      variables: { input: post },
      authMode: "AMAZON_COGNITO_USER_POOLS",
    });
    navigate(`/post/${postid}`);
  }
  return (
    <div>
      <p>Create new post</p>
      <input
        onChange={onChange}
        name="title"
        placeholder="Title"
        value={post.title}
      />
      <SimpleMDE
        value={post.content}
        onChange={(value) => setPost({ ...post, content: value })}
      />
      <button type="button" onClick={createNewPost}>
        Create Post
      </button>
    </div>
  );
}

export default withAuthenticator(CreatePost);
