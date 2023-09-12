import { useEffect } from "react";
import Sidebar from "../components/sidebar/Sidebar";
import { useDispatch, useSelector } from "react-redux";
import { getConversations } from "../features/chatSlice";

function Home() {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.user);

  // get conversations
  useEffect(() => {
    if (user?.access_token) {
      dispatch(getConversations(user?.access_token));
    }
  }, [user]);

  return (
    <div className="min-h-screen dark:bg-dark_bg_1 flex items-center justify-center py-[19px] overflow-hidden">
      {/* container */}
      <div className="container min-h-screen flex w-full">
        {/* Sidebar */}
        <Sidebar />
      </div>
    </div>
  );
}

export default Home;
