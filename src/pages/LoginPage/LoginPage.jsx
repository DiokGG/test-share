//import './LoginPage.css'

import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = () => {
    try {
      dispatch(loginUser({ username, password }));
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="LoginPage">
      <form onSubmit={(e) => e.preventDefault(0)}>
        <input
          type="text"
          placeholder="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="text"
          placeholder="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button type="submit" onClick={handleSubmit}>
          Войти
        </button>
      </form>
    </div>
  );
};
export default LoginPage;
