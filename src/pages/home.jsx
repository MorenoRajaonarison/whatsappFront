import { useEffect } from "react";
import Sidebar from "../components/sidebar/Sidebar";
import { useDispatch, useSelector } from "react-redux";
import { getConversations } from "../features/chatSlice";
import WhatsappHome from "../components/Chat/Welcome/WhatsappHome";
import ChatContainer from "../components/Chat/ChatContainer";

function Home() {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.user);
  const { activeConversation } = useSelector((state) => state.chat);

  // get conversations
  useEffect(() => {
    if (user?.access_token) {
      dispatch(getConversations(user?.access_token));
    }
  }, [user]);

  return (
    <div className="h-screen dark:bg-dark_bg_1 flex items-center justify-center  overflow-hidden">
      {/* container */}
      <div className="container h-screen flex w-full pt-[19px]">
        {/* Sidebar */}
        <Sidebar />
        {activeConversation._id ? <ChatContainer /> : <WhatsappHome />}
      </div>
    </div>
  );
}

export default Home;
