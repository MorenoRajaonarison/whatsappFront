import { useState } from "react";
import SidebarHeader from "./sidebarHeader/SidebarHeader";
import Notification from "./Notification/Notification";
import Search from "./Search/Search";
import Conversations from "./conversations/Conversations";
import SearchResultConversation from "./Search/SearchResultConversation";


const Sidebar = () => {
  const [searchResults, setSearchResults] = useState([]);
  console.log(searchResults);
  return (
    <div className="w-[40%] h-full select-none">
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
        <SearchResultConversation searchResults={searchResults} />
      ) : (
        <Conversations />
      )}
    </div>
  );
};

export default Sidebar;
