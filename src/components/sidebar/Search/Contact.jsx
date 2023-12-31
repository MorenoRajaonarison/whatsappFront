import { openCreateConversation } from "../../../features/chatSlice";
import { useDispatch, useSelector } from "react-redux";
import { useSocket } from "../../../context/socketContext";

const Contact = ({ contact, setSearchResults }) => {
  const dispatch = useDispatch();
  const socket = useSocket();
  const { user } = useSelector((state) => state.user);
  const values = {
    receiverId: contact._id,
    token: user.access_token,
  };
  const openConversation = async () => {
    let newConvo = await dispatch(openCreateConversation(values));
    if (socket) socket.emit("joinConversation", newConvo.payload._id);
    setSearchResults([]);
  };

  return (
    <li
      onClick={() => openConversation()}
      className="list-none h-[72px] hover:dark:bg-dark_bg_2 cursor-pointer dark:text-dark_text_1 px-[10px]"
    >
      {/* container */}
      <div className="flex items-center gap-x-3 py-[10px]">
        {/* contact info*/}
        <div className="flex items-center gap-x-3">
          {/* picture */}
          <div className="relative min-w-[50px] max-w-[50px] h-[50px] rounded-full overflow-hidden">
            <img
              src={contact.picture}
              alt={contact.name}
              className="w-full h-full object-cover"
            />
          </div>
          {/* conversation name and message */}
          <div className="w-full flex flex-col">
            <h1 className="font-bold flex items-center gap-x-2">
              {contact.name}
            </h1>
            <div>
              <div className="flex items-center gap-x-1 dark:text-dark_text_2">
                <div className="flex-1 items-center gap-x-1 dark:text-dark_text_2">
                  <p>{contact.status}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Border */}
      <div className="ml-16 border-b dark:border-b-dark_border_1"></div>
    </li>
  );
};

export default Contact;
