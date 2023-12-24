import "./App.css";
import RegisterPage from "../../pages/RegisterPage/RegisterPage";
import LoginPage from "../../pages/LoginPage/LoginPage";
import UserPage from "../../pages/UserPage/UserPage";
import { Routes, Route } from "react-router-dom";
import MainPage from "../../pages/MainPage/MainPage";
import { useEffect } from "react";
import { getMe } from "../../store/auth/authSlice";
import { useDispatch } from "react-redux";

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getMe());
  }, [dispatch]);

  return (
    <>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/user" element={<UserPage />} />
      </Routes>
    </>
  );
};

export default App;
