import { useEffect } from "react";
import Sidebar from "../components/sidebar/Sidebar";
import { useDispatch, useSelector } from "react-redux";
import { getConversations } from "../features/chatSlice";
import WhatsappHome from "../components/Chat/Welcome/WhatsappHome";

function Home() {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.user);
  const {activeConversation} = useSelector(state => state.chat)

  // get conversations
  useEffect(() => {
    if (user?.access_token) {
      dispatch(getConversations(user?.access_token));
    }
  }, [user]);

  return (
    <div className="h-screen dark:bg-dark_bg_1 flex items-center justify-center py-[19px] overflow-hidden">
      {/* container */}
      <div className="container h -screen flex w-full">
        {/* Sidebar */}
        <Sidebar />
        {
          activeConversation._id? 'homr': <WhatsappHome/>
        }
      </div>
    </div>
  );
}

export default Home;
