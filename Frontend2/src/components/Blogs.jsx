import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

function Blogs(props) {
  const [BlogPosts, setBlogPosts] = useState([1, 2, 4]);
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
  return (
    <div className="mainContainer flex-1 relative grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4 justify-center col-start-auto grid-flow-row-dense ">
      {BlogPosts &&
        BlogPosts.map((data) => (
          <div className="w-[100px] h-[200px] m-5 p-2 border-white text-white bg-gray-500">
            This is a blog post
          </div>
        ))}
    </div>
  );
}

export default Blogs;
