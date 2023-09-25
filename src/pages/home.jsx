import { useEffect, useState } from "react";
import Sidebar from "../components/sidebar/Sidebar";
import { useDispatch, useSelector } from "react-redux";
import { getConversations, updateMessages } from "../features/chatSlice";
import WhatsappHome from "../components/Chat/Welcome/WhatsappHome";
import ChatContainer from "../components/Chat/ChatContainer";
import { useSocket } from "../context/socketContext";

function Home() {
  const [onlineUsers, setonlineUsers] = useState([]);
  const [typing, setTyping] = useState(false);
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.user);
  const socket = useSocket();
  const { activeConversation } = useSelector((state) => state.chat);

  // get conversations and join user into socket
  useEffect(() => {
    if (user?.access_token) {
      dispatch(getConversations(user?.access_token));
      // join user into socket
      if (socket) socket.emit("join", user._id);
      // get online users
      socket.on("getOnlineUsers", (users) => {
        setonlineUsers(users);
      });
    }
  }, [user]);

  // listening to receive message

  useEffect(() => {
    socket.on("messageReceived", (message) => {
      dispatch(updateMessages(message));
    });

    socket.on("typing", (conversation) => setTyping(conversation));
    socket.on("stopTyping", () => setTyping(false));
  }, []); 

  return (
    <div className="h-screen dark:bg-dark_bg_1 flex items-center justify-center  overflow-hidden">
      {/* container */}
      <div className="container h-screen flex w-full pt-[19px]">
        {/* Sidebar */}
        <Sidebar onlineUsers={onlineUsers} typing={typing}/>
        {activeConversation._id ? (
          <ChatContainer onlineUsers={onlineUsers} typing={typing} />
        ) : (
          <WhatsappHome />
        )}
      </div>
    </div>
  );
}

export default Home;
