import { useSelector } from "react-redux";
import { useRef, useEffect } from "react";
import Message from "./Message";

const ChatMessages = () => {
  const { messages } = useSelector((state) => state.chat);
  const { user } = useSelector((state) => state.user);
  const endRef = useRef()

  useEffect(() => {
    endRef.current.scrollIntoView({behavior: "smooth"})
  }, [messages])

  return (
    <div className="mb-[60px] bg-[url('https://res.cloudinary.com/dmhcnhtng/image/upload/v1677358270/Untitled-1_copy_rpx8yb.jpg')] bg-cover bg-no-repeat">
      {/* container */}
      <div className="scrollbar overflow_scrollbar overflow-auto py-2 px-[6%]">
        {/* messages */}
        {messages &&
          messages.map((msg) => (
            <Message
              message={msg}
              key={msg._id}
              me={user._id === msg.sender._id}
            />
          ))}
        <div ref={endRef}></div>
      </div>
    </div>
  );
};

export default ChatMessages;
