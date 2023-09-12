import React from "react";
import { useSelector } from "react-redux";
import Conversation from "./Conversation";

const Conversations = () => {
  const { conversations } = useSelector((state) => state.chat);

  return (
    <div className="convos scrollbar">
      <ul>
        {conversations &&
          conversations.map((conversation) => (
            <Conversation convo={conversation} key={conversation._id} />
          ))}
      </ul>
    </div>
  );
};

export default Conversations;
