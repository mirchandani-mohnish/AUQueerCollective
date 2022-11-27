import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

function Blogs(props) {
  const [BlogPosts, setBlogPosts] = useState([1, 2, 4]);
  const [BlogRead, setBlogRead] = useState(false);
  const [currentBlogContent, setCurrentBlogContent] = useState("Sorry Error");
  const handleBlogRead = (BlogPosts, i) => {
    setBlogRead(true);
    setCurrentBlogContent(BlogPosts[i]);
  };

  const handleBlogReadClose = () => {
    setBlogRead(false);
    console.log(BlogRead);
  };

  // const setBlogHtml = () => {
  //   return { __html: `'<div>hello ${currentBlogContent.body}</div>'` };
  // };
  useEffect(() => {
    axios
      .get("http://localhost:5000/server/posts/")
      .then((res) => {
        res ? setBlogPosts(res.data) : setBlogPosts([1, 2]);
        console.log(res);
      })
      .catch((e) => console.log("Kuch hoo rha "));
    // setBlogPosts([1, 2, 3, 4]);
  }, []);

  if (!BlogRead) {
    return (
      <div className="relative w-full  shadow-md md:grid-cols-3 gap-3 md:gap-4 justify-center col-start-auto grid-flow-row-dense ">
        {BlogPosts &&
          BlogPosts.map((data, i) => (
            <div
              key={i}
              className=" w-full h-[300px] m-5 p-3 rounded-lg border-solid-2 border-white text-white bg-gray-500"
            >
              <div className="text-2xl font-bold font-white m-3 p-2">
                {data.title}
              </div>
              <div className="text-xl font-bold font-white m-3 p-2">
                {data.author ? data.author : "Anonymous"}
              </div>
              <button
                className="w-[100px] h-[50px] m-2 p-2 rounded-lg bg-slate-800 shadow-lg hover:shadow-sm hover:bg-slate-700"
                onClick={() => {
                  handleBlogRead(BlogPosts, i);
                }}
              >
                Read
              </button>
            </div>
          ))}
      </div>
    );
  } else {
    return (
      <div className="relative w-full  shadow-md md:grid-cols-3 gap-3 md:gap-4 justify-center col-start-auto grid-flow-row-dense ">
        <div className="text-3xl p-3 justify-center font-bold text-white">
          {currentBlogContent.title} <br />
        </div>
        <div className="text-xl p-3 justify-center font-bold text-white">
          {currentBlogContent.author}
        </div>
        <div
          className="text-white text-lg justify-center p-5 m-5"
          dangerouslySetInnerHTML={{ __html: currentBlogContent.body }}
        ></div>
        <button
          className="w-[100px] h-[50px] text-white m-2 p-2 rounded-lg bg-slate-800 shadow-lg hover:shadow-sm hover:bg-slate-700"
          onClick={() => {
            handleBlogReadClose();
          }}
        >
          Close
        </button>
      </div>
    );
  }
}

export default Blogs;
