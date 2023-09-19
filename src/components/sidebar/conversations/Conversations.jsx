import React from "react";
import { useSelector } from "react-redux";
import Conversation from "./Conversation";

const Conversations = () => {
  const { conversations, activeConversation } = useSelector((state) => state.chat);

  return (
    <div className="convos scrollbar">
      <ul>
        {conversations &&
          conversations
            .filter((c) => c.latestMessage || c._id === activeConversation._id)
            .map((conversation) => (
              <Conversation convo={conversation} key={conversation._id} />
            ))}
      </ul>
    </div>
  );
};

export default Conversations;
