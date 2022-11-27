import React from "react";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import axios from "axios";
import { useState } from "react";
import { useSelector } from "react-redux";
const NewBlog = () => {
  const [data, setData] = useState("");
  let userData = {
    name: "",
  };

  const [profile, setProfile] = useState(
    useSelector((state) =>
      state.auth.value ? state.auth.value.payload : false
    )
  );

  const [blogTitle, setBlogTitle] = useState("");

  const handleSubmit = (data, title) => {
    console.log(data);
    const d = new Date();
    const postData = {
      title: title,
      body: data,
      author: profile.given_name || "Anonymous",
      date: d,
    };
    console.log(postData);

    axios
      .post("http://localhost:5000/server/posts/create", postData)
      .then((res) => {
        console.log(res);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  return (
    <div className="m-5 p-5 rounded-lg">
      <div className=" m-2 p-2 h3 font-bold text-2xl justify-center text-white">
        Write something interesting (Please Login if you want to submit);
      </div>
      <input
        className="w-full m-3 p-3"
        type="text"
        name="title"
        value={blogTitle}
        onChange={(e) => {
          setBlogTitle(e.target.value);
        }}
      ></input>
      <CKEditor
        editor={ClassicEditor}
        data="<p>Write something interesting</p>"
        onReady={(editor) => {
          console.log("Editor is ready to use!", editor);
        }}
        onChange={(event, editor) => {
          setData(editor.getData());
          console.log(data);
        }}
        // onBlur={(event, editor) => {
        //   console.log("Blur.", editor);
        // }}
        // onFocus={(event, editor) => {
        //   console.log("Focus.", editor);
        // }}
        className="w-full h-full mx-auto m-2 p-2"
      />

      <button
        className="m-5 p-2 w-40 h-10 rounded-lg bg-green-600 text-white hover:bg-green-800"
        onClick={() => handleSubmit(data, blogTitle)}
      >
        Submit
      </button>
    </div>
  );
};

export default NewBlog;
