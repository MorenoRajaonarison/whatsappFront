import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/home";
import Login from "./pages/login";
import Register from "./pages/register";
import { useSelector } from "react-redux";
import { SocketProvider } from "./context/socketContext";

function App() {
  const { user } = useSelector((state) => state.user);
  const { access_token } = user;

  return (
    <BrowserRouter>
      <div className="dark">
        <SocketProvider
          serverUrl={process.env.REACT_APP_API_ENDPOINT.split("/api/v1")[0]}
        >
          <Routes>
            <Route
              exact
              path="/"
              element={access_token ? <Home /> : <Navigate to="/login" />}
            />
            <Route
              exact
              path="/login"
              element={!access_token ? <Login /> : <Navigate to="/" />}
            />
            <Route exact path="/register" element={<Register />} />
          </Routes>
        </SocketProvider>
      </div>
    </BrowserRouter>
  );
}

export default App;
