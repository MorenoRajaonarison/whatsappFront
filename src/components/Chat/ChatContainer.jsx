import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import ChatHeader from "./header/chatHeader";
import ChatMessages from "./messages/ChatMessages";
import { getConversationMessages } from "../../features/chatSlice";
import ChatActions from "./actions/ChatActions"
import { checkOnlineStatus } from "../../utils/chat";

const ChatContainer = ({onlineUsers}) => {
  const dispatch = useDispatch();
  const { activeConversation, messages } = useSelector((state) => state.chat);
  const { user } = useSelector((state) => state.user);
  const values = {
    token: user.access_token,
    convoId: activeConversation._id,
  };
  useEffect(() => {
    if (activeConversation._id) {
      dispatch(getConversationMessages(values));
    }
  }, [activeConversation]);
  return (
    <div className="relative w-full h-full border-1 dark:border-1-dark_border_2 select-none overflow-hidden">
      {/* container */}
      <div className="">
        {/* header */}
        <ChatHeader online={checkOnlineStatus(onlineUsers, user, activeConversation.users)} />
        {/* messages */}
        <ChatMessages />
        {/* chat actions */}
        <ChatActions />
      </div>
    </div>
  );
};

export default ChatContainer;
