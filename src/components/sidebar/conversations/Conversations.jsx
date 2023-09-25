import { useSelector } from "react-redux";
import Conversation from "./Conversation";
import { checkOnlineStatus } from "../../../utils/chat";

const Conversations = ({ onlineUsers }) => {
  const { user } = useSelector((state) => state.user);
  const { conversations, activeConversation } = useSelector(
    (state) => state.chat
  );
  return (
    <div className="convos scrollbar">
      <ul>
        {conversations &&
          conversations
            .filter((c) => c.latestMessage || c._id === activeConversation._id)
            .map((conversation) => {
              let check = checkOnlineStatus(onlineUsers, user, conversation.users);
              return (
                <Conversation
                  convo={conversation}
                  key={conversation._id}
                  online={check ? true : false}
                />
              );
            })}
      </ul>
    </div>
  );
};

export default Conversations;
