/*
  This page is where users are sent when
  they are going to create a post
*/
import { withAuthenticator } from "@aws-amplify/ui-react";
import { useState, React, useRef } from "react";
import { API, Storage } from "aws-amplify";
import { v4 as uuid } from "uuid";
import { createPost } from "../graphql/mutations";
import { useNavigate } from "react-router-dom";
import SimpleMDE from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";

const initialState = { title: "", content: "" };

export function CreatePost() {
  const [post, setPost] = useState(initialState);
  const [image, setImage] = useState()
  const { title, content } = post;
  const navigate = useNavigate();
  const imageFileInput = useRef(null);


  function onChange(e) {
    setPost(() => ({
      ...post,
      [e.target.name]: e.target.value,
      
    }));
  }

  async function uploadImage() {
    imageFileInput.current.click();
  }

  function handleChange(e) {
    const fileUploaded = e.target.files[0];
    if (!fileUploaded) return;
    setImage(fileUploaded);
  }

  async function createNewPost() {{
    if (!title || !content) return;
    const postid = uuid();
    post.id = postid;

    if (image) {
      const filename = `${image.name}_${uuid()}`;
      post.postImage = filename;
      await Storage.put(filename, image);
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

      <input
        type='file'
        ref={imageFileInput}
        className='absolute w-0 h-0'
        onChange={handleChange}
      />
      <button
        type="button"
        className="shadow border mb-4 font-semibold px-8 py-2 rounded-lg text-blue-900"
        onClick={uploadImage}
      >
        Upload Image
      </button>
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
