import React from 'react';
import Contact from './Contact';

const SearchResultConversation = ({searchResults}) => {
  return (
    <div w-full convos scrollbar>
      <div>
        {/* heading */}
        <div className="flex flex-col px-8 pt-8">
          <h1 className="font-extralight text-md text-green_2">Contacts</h1>
          <span className="w-full mt-4 ml-10 border-b dark:border-b-dark_border_1"></span>
        </div>
        {/* results */}
        <ul>
          {searchResults && searchResults.map(user => (
            <Contact contact={user} key={user._id}/>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default SearchResultConversation;