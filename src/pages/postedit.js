import { useEffect, useState } from "react";
import { API, graphqlOperation } from "aws-amplify";
import SimpleMDE from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";
import { useNavigate, useParams } from "react-router-dom";
import { updatePost } from "../graphql/mutations";
import { getPost } from "../graphql/queries";

function EditPost() {
  const navigate = useNavigate();
  let { postid } = useParams();
  const id = postid;
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
  function onChange(e) {
    setMyPost(() => ({ ...myPost, [e.target.name]: e.target.value }));
  }
  const { title, content } = myPost;
  async function updateCurrentPost() {
    if (!title || !content) return;
    const postUpdated = {
      id,
      content,
      title,
    };
    await API.graphql({
      query: updatePost,
      variables: { input: postUpdated },
      authMode: "AMAZON_COGNITO_USER_POOLS",
    });
    console.log("post successfully updated!");
    navigate("/my-posts");
  }
  return (
    <div className="ml-[10vw]">
      <h1 className="text-3xl font-semibold tracking-wide mt-6 mb-2 ">
        Edit post
      </h1>
      <input
        onChange={onChange}
        name="title"
        placeholder="Title"
        value={myPost.title}
        className="border-b border-blue-900 pb-2 text-lg my-4 focus:outline-none min-w-[40vw] text-gray-900 font-semibold placeholder-gray-700 y-2"
      />
      <SimpleMDE
        value={myPost.content}
        onChange={(value) => setMyPost({ ...myPost, content: value })}
        className="max-w-[70vw] max-h-[60vh] mb-3"
      />
      <button
        className="shadow border mb-4 font-semibold px-8 py-2 rounded-lg text-blue-900"
        onClick={updateCurrentPost}
      >
        Update Post
      </button>
    </div>
  );
}

export default EditPost;
