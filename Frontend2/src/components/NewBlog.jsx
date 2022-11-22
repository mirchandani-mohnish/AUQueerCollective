import React from "react";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import axios from "axios";
const NewBlog = () => {
  const handleSubmit = (userData, data) => {
    const postData = {
      title: data,
      body: data,
      author: userData.name,
      date: " ",
      comments: ["none", "none"],
    };
    axios
      .post("http://localhost:5000/server/posts/create", postData)
      .then()
      .catch((e) => {
        console.log(e);
      });
    console.log(data);
    console.log(userData);
  };
  return (
    <div className="m-5 p-5 rounded-lg">
      <div className=" m-2 p-2 h3 font-bold text-2xl justify-center text-white">
        Write something interesting
      </div>
      <CKEditor
        editor={ClassicEditor}
        data="<p>Write something interesting</p>"
        onReady={(editor) => {
          console.log("Editor is ready to use!", editor);
        }}
        onChange={(event, editor) => {
          const data = editor.getData();
        }}
        onBlur={(event, editor) => {
          console.log("Blur.", editor);
        }}
        onFocus={(event, editor) => {
          console.log("Focus.", editor);
        }}
        className="w-full h-full mx-auto m-2 p-2"
      />

      <button
        className="m-5 p-2 w-40 h-10 rounded-lg bg-green-600 text-white hover:bg-green-800"
        onClick={handleSubmit}
      >
        Submit
      </button>
    </div>
  );
};

export default NewBlog;
