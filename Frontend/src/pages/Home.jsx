import { useEffect, useRef, useState } from "react";
import Sidebar from "../components/Sidebar";
import { GiHamburgerMenu } from "react-icons/gi";
import Header from "../components/Header";
import { ChatData } from "../context/ChatContext";
import { CgProfile } from "react-icons/cg";
import { FaRobot } from "react-icons/fa";
import { LoadingBig, LoadingSmall } from "../components/Loading";
import { IoMdSend } from "react-icons/io";

const wordWrapStyle = {
  overflowWrap: 'break-word',
  wordWrap: 'break-word',
  whiteSpace: 'normal',
};

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const {
    fetchResponse,
    messages,
    prompt,
    setPrompt,
    newRequestLoading,
    loading,
    chats,
  } = ChatData();

  const submitHandler = (e) => {
    e.preventDefault();
    fetchResponse();
  };

  const messagecontainerRef = useRef();

  useEffect(() => {
    if (messagecontainerRef.current) {
      messagecontainerRef.current.scrollTo({
        top: messagecontainerRef.current.scrollHeight,
        behavior: "smooth",
      });
    }
  }, [messages]);

  return (
    <div className="flex h-screen bg-gray-900 text-white">
      <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar} />

      <div className="flex flex-1 flex-col">
        <button
          onClick={toggleSidebar}
          className="md:hidden p-4 bg-gray-800 text-2xl rounded-md hover:bg-gray-700 transition-colors duration-300"
        >
          <GiHamburgerMenu />
        </button>

        <div className="flex-1 p-6 mb-20 md:mb-0">
          <Header />

          {loading ? (
            <LoadingBig />
          ) : (
            <div
              className="flex-1 p-6 max-h-[600px] overflow-y-auto mb-20 md:mb-0 thin-scrollbar"
              ref={messagecontainerRef}
            >
              {messages && messages.length > 0 ? (
                messages.map((e, i) => (
                  <div key={i} style={wordWrapStyle}>
                    <div className="mb-4 p-4 rounded bg-blue-700 text-white flex gap-2 shadow-lg transition-all duration-300 hover:bg-blue-600 transform hover:scale-105">
                      <div className="bg-white p-2 rounded-full text-black text-2xl h-10 flex items-center justify-center">
                        <CgProfile />
                      </div>
                      <p>{e.question}</p>
                    </div>

                    <div className="mb-4 p-4 rounded bg-gray-700 text-white flex gap-2 shadow-lg transition-all duration-300 hover:bg-gray-600 transform hover:scale-105">
                      <div className="bg-white p-2 rounded-full text-black text-2xl h-10 flex items-center justify-center">
                        <FaRobot />
                      </div>
                      <p dangerouslySetInnerHTML={{ __html: e.answer }}></p>
                    </div>
                  </div>
                ))
              ) : (
                <p>No chat yet</p>
              )}

              {newRequestLoading && <LoadingSmall />}
            </div>
          )}
        </div>
      </div>

      {chats && chats.length === 0 ? (
        ""
      ) : (
        <div className="fixed bottom-0 right-0 left-auto p-4 bg-gray-900 w-full md:w-[75%] rounded-t-lg shadow-lg">
          <form
            onSubmit={submitHandler}
            className="flex items-center border-t border-gray-700 bg-gray-800 rounded-b-lg"
          >
            <input
              className="flex-grow p-4 bg-gray-700 rounded-l text-white outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 hover:bg-gray-600"
              type="text"
              placeholder="Enter a prompt here"
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              required
            />
            <button className="p-4 bg-gray-700 rounded-r text-2xl text-white hover:bg-blue-600 transition-colors duration-300">
              <IoMdSend />
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default Home;
