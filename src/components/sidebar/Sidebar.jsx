import { useState } from "react";
import SidebarHeader from "./sidebarHeader/SidebarHeader";
import Notification from "./Notification/Notification";
import Search from "./Search/Search";
import Conversations from "./conversations/Conversations";
import SearchResultConversation from "./Search/SearchResultConversation";

const Sidebar = ({onlineUsers, typing}) => {
  const [searchResults, setSearchResults] = useState([]);
  return (
    <div className="flex0030 max-w-[30%] h-full select-none">
      {/* sidebar header */}
      <SidebarHeader />
      {/* notification */}
      <Notification />
      {/* search */}
      <Search
        searchLength={searchResults.length}
        setSearchResults={setSearchResults}
      />

      {/* conversations */}
      {searchResults.length > 0 ? (
        <SearchResultConversation
          searchResults={searchResults}
          setSearchResults={setSearchResults}
        />
      ) : (
        <Conversations onlineUsers={onlineUsers} typing={typing}/>
      )}
    </div>
  );
};

export default Sidebar;
