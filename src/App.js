import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/home";
import Login from "./pages/login";
import Register from "./pages/register";
import { useSelector } from "react-redux";

function App() {
  const { user } = useSelector((state) => state.user);
  const { access_token } = user;
  console.log(user);
  return (
    <BrowserRouter>
      <div className="dark">
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
          <Route
            exact
            path="/register"
            element={!access_token ? <Register /> : <Navigate to="/" />}
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
