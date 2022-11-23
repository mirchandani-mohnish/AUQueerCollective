import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";

const Conversations = () => {
  const [threads, setThreads] = useState([]);
  const [threadRead, setThreadRead] = useState(false);
  const [currentThreadContent, setCurrentThreadContent] = useState([]);
  const [threadReply, setThreadReply] = useState("");
  const d = new Date();
  useEffect(() => {
    axios
      .get("http://localhost:5000/conversations")
      .then((res) => {
        setThreads(res.data);
        console.log(res);
      })
      .catch((e) => console.log(e));
  }, []);

  const handleThreadRead = async (threadId, i) => {
    await axios
      .get(`http://localhost:5000/conversations/${threadId}`)
      .then((res) => {
        setCurrentThreadContent(res.data);
        console.log(res);
      })
      .catch((e) => {
        console.log(e);
      });
    setThreadRead(true);
  };

  const handleThreadReadClose = () => {
    setThreadRead(false);
    console.log(threadRead);
  };
  const handleNewThread = () => {
    console.log("need to create a new thread");
  };

  const handleReplySubmit = (threadId) => {
    const threadBody = {
      title: currentThreadContent.title,
      author: currentThreadContent.author,
      body: threadReply,
      Date: d,
      threadId: threadId,
    };
    axios
      .post("http://localhost:5000/reply", threadBody)
      .then((res) => console.log("done"))
      .catch((e) => console.log("Error in replyig ", e));
  };

  if (!threadRead) {
    return (
      <div className="w-full h-full justify-center">
        <div className="text-3xl text-bold text-center m-2 p-2">Spaces</div>
        <div className="bg-slate-600 shadow-lg w-full h-20">
          <button
            className="flex justify-end m-3 p-3 align-middle bg-slate-800 hover:bg-slate-700 text-white  rounded-lg shadow-lg"
            onClick={handleNewThread}
          >
            New Thread
          </button>
        </div>
        <div className="w-full h-full flex-1 m-2 p-3">
          {threads &&
            threads.map((threadData, i) => (
              <div
                key={i}
                className=" w-full h-[300px] m-5 p-3 rounded-lg border-solid-2 border-white text-white bg-gray-500"
              >
                <div className="text-2xl font-bold font-white m-3 p-2">
                  {threadData.title}
                </div>
                <div className="text-xl font-bold font-white m-3 p-2">
                  {threadData.author ? threadData.author : "Anonymous"}
                </div>
                <button
                  className="w-[100px] h-[50px] m-2 p-2 rounded-lg bg-slate-800 shadow-lg hover:shadow-sm hover:bg-slate-700"
                  onClick={() => {
                    handleThreadRead(threadData.threadId, i);
                  }}
                >
                  Enter
                </button>
              </div>
            ))}
        </div>
      </div>
    );
  } else {
    return (
      <div className="w-full h-full justify-center">
        <div className="text-3xl text-bold text-center m-2 p-2">Spaces</div>

        <div className="relative w-full  shadow-md md:grid-cols-3 gap-3 md:gap-4 justify-center col-start-auto grid-flow-row-dense ">
          <div className="text-3xl p-3 justify-center font-bold text-white">
            {currentThreadContent.title} <br />
          </div>
          {currentThreadContent &&
            currentThreadContent.map((singleThread, i) => (
              <div
                key={i}
                className="text-white text-lg justify-center p-5 m-5"
              >
                {singleThread.body}
              </div>
            ))}

          <form
            onSubmit={() => {
              handleReplySubmit(currentThreadContent.threadId);
            }}
          >
            <label>
              Reply:
              <textarea
                value={threadReply}
                onChange={(event) => {
                  setThreadReply(event.target.value);
                }}
              />
            </label>
            <input type="submit" value="Submit" />
          </form>
          <button
            className="w-[100px] h-[50px] text-white m-2 p-2 rounded-lg bg-slate-800 shadow-lg hover:shadow-sm hover:bg-slate-700"
            onClick={() => {
              handleThreadReadClose();
            }}
          >
            Close
          </button>
        </div>
      </div>
    );
  }
};
export default Conversations;
