import React from 'react';
import ChatHeader from './header/chatHeader';

const ChatContainer = () => {

  return (
    <div className='relative w-full h-full border-1 dark:border-1-dark_border_2 select-none overflow-hidden'>
      {/* container */}
      <div className="">
        {/* header */}
        <ChatHeader/>
      </div>
    </div>
  );
}

export default ChatContainer;
