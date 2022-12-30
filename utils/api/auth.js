import { API_URL } from ".";

export async function login(username, password) {
  try {
    const response = await fetch(`${API_URL}/api/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    });

    if (!response.ok) throw new Error(response.statusText);

    const data = await response.json();

    localStorage.setItem("user", JSON.stringify({ ...data, username }));
  } catch (error) {
    console.log(error);
    alert("The username or password is wrong, please try again :(");
  }
}

export async function getUser() {
  const user = JSON.parse(localStorage.getItem("user"));
  if (!user?.token) {
    alert("You are not logged in");
    return;
  }
  try {
    const response = await fetch(`${API_URL}/api/auth/me`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Token ${user.token}`,
      },
    });
    return response.json();
  } catch (error) {
    console.log(error);
  }
}

export async function register({ email, username, password, passwordConfirm }) {
  try {
    const response = await fetch(`${API_URL}/api/auth/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        username,
        password,
        password_confirm: passwordConfirm,
      }),
    });

    if (!response.ok) throw new Error(response.statusText);
  } catch (error) {
    console.log(error);
  }
}
