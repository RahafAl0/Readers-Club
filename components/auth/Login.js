import { useTranslation } from "next-i18next";
import { useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { login } from "../../utils/api/auth";

const Login = () => {
  const { t } = useTranslation("common");

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  const router = useRouter();

  return (
    <div className="vh-100">
    <div className="container h-100">
      <div className="row d-flex justify-content-center align-items-center h-100">
        <div className="col-lg-12 col-xl-11">
          <div className="card text-black">
            <div className="card-body p-md-5">
              <div className="row justify-content-center">
                <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                  <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">
                    {t("signin")}
                  </p>
                  <form className="mx-1 mx-md-4">
                    <div className="d-flex flex-row align-items-center mb-4">
                      <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                      <div className="form-outline flex-fill mb-0">
                        <label className="form-label" htmlFor="email">
                          {t("name")}
                        </label>
                        <input
                          type="username"
                          id="username"
                          value={username}
                          className="form-control"
                          onChange={(event) => {
                            setUsername(event.target.value);
                          }}
                        />
                      </div>
                    </div>

                    <div className="form-outline mb-4">
                      <label className="form-label" htmlFor="password">
                        {t("email")}
                      </label>
                      <input
                        type="password"
                        id="password"
                        value={password}
                        className="form-control"
                        onChange={(event) => {
                          setPassword(event.target.value);
                        }}
                      />
                    </div>

                    <div className="row mb-4">
                      <div className="col d-flex justify-content-center">
                        <div className="form-check">
                          <label
                            className="form-check-label"
                            htmlFor="rememberMe"
                          >
                            {" "}
                            {t("rememberMe")}{" "}
                          </label>
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
                        </div>
                      </div>
                    </div>

                    <button
                      type="button"
                      className="btn btn-primary btn-block mb-4"
                      onClick={() => {
                        login(username, password)
                          .then(() => {
                            router.push("/");
                          })
                          .catch((err) => {
                            console.log(err);
                          });
                      }}
                    >
                      {t("signin")}
                    </button>

                    <div className="text-center">
                      <p>
                        {t("notMember")}{" "}
                        <Link href="/auth/register">{t("register")}</Link>
                      </p>
                    </div>
                  </form>
                </div>
                <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
                  <img
                    src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
                    className="img-fluid"
                    alt="Sample image"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Login;
