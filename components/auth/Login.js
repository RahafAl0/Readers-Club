import { useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { login } from "../../utils/auth";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  const router = useRouter()

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
          login(username, password)
          .then(() => {
            router.push('/')
          })
          .catch((err) => {
            console.log(err)
          })
        }}
      >
        Sign in
      </button>

      <div className="text-center">
        <p>
          Not a member? <Link href="/auth/register">Register</Link>
        </p>
      </div>
    </form>
  );
};

export default Login;
