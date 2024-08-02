import PropTypes from "prop-types";
import { IoIosCloseCircle } from "react-icons/io";
import { MdDelete, MdAdd } from "react-icons/md";
import { ChatData } from "../context/ChatContext";
import { LoadingSpinner } from "./Loading";
import { UserData } from "../context/UserContext";

const Sidebar = ({ isOpen, toggleSidebar }) => {
  const { chats, createChat, createLod, setSelected, deleteChat } = ChatData();
  const { logoutHandler } = UserData();

  const deleteChatHandler = (id) => {
    if (confirm("Are you sure you want to delete this chat?")) {
      deleteChat(id);
    }
  };

  const clickEvent = (id) => {
    setSelected(id);
    toggleSidebar();
  };

  return (
    <div
      className={`fixed inset-0 bg-gray-800 p-4 transition-transform transform md:relative md:translate-x-0 md:w-1/5 md:block ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      <button
        className="md:hidden p-2 mb-4 bg-gray-700 rounded text-2xl"
        onClick={toggleSidebar}
      >
        <IoIosCloseCircle />
      </button>

      <div className="text-2xl mb-6 neon-text">Gemini Pro+</div>

      <div className="mb-4">
        <button
          onClick={createChat}
          className="w-80% py-2 bg-green-200 hover:bg-green-400 text-black rounded flex items-left justify-center transition duration-600"
        >
          {createLod ? <LoadingSpinner /> : <MdAdd size={24} />}
          <span className="ml-2">{createLod ? "" : "New Chat"}</span>
        </button>
      </div>

      <div className="mb-4">
        <p className="text-sm text-gray-400 mb-2">Recent</p>

        <div className="max-h-[500px] overflow-y-auto mb-20 md:mb-0 thin-scrollbar">
          {chats && chats.length > 0 ? (
            chats.map((e) => (
              <button
                key={e._id}
                className="w-full text-left py-2 px-2 bg-gray-700 hover:bg-gray-600 text-white rounded mt-2 flex justify-between items-center transition duration-300"
                onClick={() => clickEvent(e._id)}
              >
                <span>{e.latestMessage.slice(0, 38)}...</span>
                <button
                  className="bg-red-600 text-white text-xl px-3 py-2 rounded-md hover:bg-red-700 transition duration-300"
                  onClick={(event) => {
                    event.stopPropagation();
                    deleteChatHandler(e._id);
                  }}
                >
                  <MdDelete />
                </button>
              </button>
            ))
          ) : (
            <p>No chats yet, Waiting For You</p>
          )}
        </div>
      </div>

      <div className="absolute bottom-0 mb-6 w-full">
        <button
          className="bg-red-600 text-white text-xl px-3 py-2 rounded-md hover:bg-red-700 transition duration-300"
          onClick={logoutHandler}
        >
          Logout
        </button>
      </div>

      <style jsx>{`
        .neon-text {
          color: #ffffff !important;
          text-shadow: 
            0 0 5px #ff8c00, 
            0 0 10px #ff8c00, 
            0 0 15px #ff8c00, 
            0 0 20px #ff8c00, 
            0 0 25px #ff8c00, 
            0 0 30px #ff8c00, 
            0 0 35px #ff8c00;
        }
      `}</style>
    </div>
  );
};

Sidebar.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  toggleSidebar: PropTypes.func.isRequired,
};

export default Sidebar;
