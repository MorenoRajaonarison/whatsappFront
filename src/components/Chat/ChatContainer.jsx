import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import ChatHeader from "./header/chatHeader";
import ChatMessages from "./messages/ChatMessages";
import { getConversationMessages } from "../../features/chatSlice";
import ChatActions from "./actions/ChatActions";
import { checkOnlineStatus } from "../../utils/chat";
import FilePreview from "./preview/files/FilePreview";

const ChatContainer = ({ onlineUsers, typing }) => {
  const dispatch = useDispatch();
  const { activeConversation, files } = useSelector((state) => state.chat);
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
        <ChatHeader
          online={checkOnlineStatus(
            onlineUsers,
            user,
            activeConversation.users
          )}
        />
        {files.length > 0 ? (
          <FilePreview />
        ) : (
          <>
            {/* messages */}
            <ChatMessages typing={typing} />
            {/* chat actions */}
            <ChatActions />
          </>
        )}
      </div>
    </div>
  );
};

export default ChatContainer;
