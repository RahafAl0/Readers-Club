import getAxiosInstance from "./getAxiosInstance";

export async function login(username, password) {
  try {
    const response = await getAxiosInstance({ auth: false }).post(
      "/auth/login",
      { username, password },
      { headers: { "Content-Type": "application/json" } }
    );

    if (response.status >= 400) throw new Error(response.statusText);

    const { data } = response;

    localStorage.setItem("user", JSON.stringify({ ...data, username }));
  } catch (error) {
    console.log(error);
    alert("The username or password is wrong, please try again :(");
  }
}

export async function getUser() {
  try {
    const response = await getAxiosInstance({ auth: true }).get("/auth/me", {
      headers: { "Content-Type": "application/json" },
    });
    return response.data;
  } catch (error) {
    console.log(error);
  }
}

export async function register({ email, username, password, passwordConfirm }) {
  try {
    const response = await getAxiosInstance({ auth: false }).post(
      "/auth/register",
      { email, username, password, password_confirm: passwordConfirm },
      { headers: { "Content-Type": "application/json" } }
    );

    if (response.status >= 400) throw new Error(response.statusText);
  } catch (error) {
    console.log(error);
  }
}
