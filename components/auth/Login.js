import { useState } from "react";

const API_URL = 'http://localhost:8000';

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  

  async function login() {
    try {
        const response = await fetch(`${API_URL}/api/auth/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ username, password })
        });
        const data = await response.json();
        console.log('login data is here => ',data);

        localStorage.setItem('user', JSON.stringify({...data, username}));
        await getUser();
    } catch (error) {
        console.log(error);
    }
}

  async function getUser() {
    const user = JSON.parse(localStorage.getItem('user'));
    if (!user?.token) {
        alert('You are not logged in');
        return;
    }
    try {
      const response = await fetch(`${API_URL}/api/auth/me`, {
          headers: {
              'Content-Type': 'application/json',
              'Authorization': `Token ${user.token}`
          }
      })
       return response.json();
  } catch (error) {
      console.log(error);
  }
}
  

  return (
    <form>
      <div className="form-outline mb-4">
        <input
          type="username"
          id="username"
          value={username}
          className="form-control"
          onChange={(event) => {
            setUsername(event.target.value);
          }}
        />
        <label className="form-label" htmlFor="email">
          Email address
        </label>
      </div> 

      <div className="form-outline mb-4">
        <input
          type="password"
          id="password"
          value={password}
          className="form-control"
          onChange={(event) => {
            setPassword(event.target.value);
          }}
        />
        <label className="form-label" htmlFor="password">
          Password
        </label>
      </div>

      <div className="row mb-4">
        <div className="col d-flex justify-content-center">
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              value={rememberMe}
              id="rememberMe"
              checked
              onChange={(event) => {
                setRememberMe(event.target.value);
              }}
            />
            <label className="form-check-label" htmlFor="rememberMe">
              {" "}
              Remember me{" "}
            </label>
          </div>
        </div>

        <div className="col">
          <a href="#!">Forgot password?</a>
        </div>
      </div>

      <button
        type="button"
        className="btn btn-primary btn-block mb-4"
        onClick={() => {
          login();
        }}
      >
        Sign in
      </button>

      <div className="text-center">
        <p>
          Not a member? <a href="#!">Register</a>
        </p>
      </div>
    </form>
  );
};

export default Login;
