/*
  This page is where users are sent when
  they are going to create a post
*/
import { withAuthenticator } from "@aws-amplify/ui-react";
import { useState, React } from "react";
import { API, Storage } from "aws-amplify";
import { v4 as uuid } from "uuid";
import { createPost } from "../graphql/mutations";
import { useNavigate } from "react-router-dom";
import SimpleMDE from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";

const initialState = { title: "", content: "" };

export function CreatePost() {
  const [post, setPost] = useState(initialState);
  const [imageData, setImageData] = useState(null);
  const [image, setImage] = useState()
  const [fileStatus, setFileStatus] = useState(false)
  const { title, content } = post;
  const navigate = useNavigate();

  function onChange(e) {
    setPost(() => ({
      ...post,
      [e.target.name]: e.target.value,
      
    }));
  }

  const uploadImage = async () => {
    const image = await Storage.put(imageData.name, imageData, {
      contentType: imageData.type
    });
    setImage(image);
    setFileStatus(true)
  }

  async function createNewPost() {{
    if (!title || !content) return;
    const postid = uuid();
    post.id = postid;

    if (image) {
      post.postImage = image.filename;
    }

    await API.graphql({
      query: createPost,
      variables: { input: post },
      authMode: "AMAZON_COGNITO_USER_POOLS",
    });
  }
    navigate(`/post/${post.id}`);
  }
  return (
    <div className="ml-[20vw]">
      <h2 className="text-lg font-semibold">Create new post</h2>
      <input
        onChange={onChange}
        name="title"
        placeholder="Title"
        value={post.title}
        className="border-b border-blue-900 pb-2 text-lg my-4 focus:outline-none min-w-[40vw] text-gray-900 font-semibold placeholder-gray-700 y-2"
      />
      <SimpleMDE
        value={post.content}
        onChange={(value) => setPost({ ...post, content: value })}
        className="max-w-[70vw] max-h-[60vh] mb-3"
      />

      <input type="file" onChange={(e) => setImageData(e.target.files[0])} />;
      <button type="button" className="shadow border mb-4 font-semibold px-8 py-2 rounded-lg text-blue-900" onClick={uploadImage}>Upload image</button>
      {fileStatus ? "file uploaded successfully" : ""}
      <button
        type="button"
        onClick={createNewPost}
        className="shadow border mb-4 font-semibold px-8 py-2 rounded-lg text-blue-900"
      >
        Create Post
      </button>
    </div>
  );
}

export default withAuthenticator(CreatePost);
