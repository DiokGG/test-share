import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { registerUser } from "../../store/auth/authSlice";

const RegisterPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [avatar, setAvatar] = useState("");

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      // const data = new FormData();
      // data.append("username", username);
      // data.append("password", password);
      // data.append("avatar", avatar);
      // dispatch(registerUser(data));
      dispatch(registerUser({ username, password, avatar }));
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Username"
      />

      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
      />
      <input type="file" onChange={(e) => setAvatar(e.target.files[0])} />
      <div>
        <button type="submit">Подтвердить</button>
        <Link to="/login">Уже зарегистрированы ?</Link>
      </div>
    </form>
  );
};

export default RegisterPage;
