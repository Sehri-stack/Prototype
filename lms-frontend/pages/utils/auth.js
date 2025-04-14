export const login = async (email, password) => {
  try {
    const res = await fetch("http://localhost:1337/api/auth/local", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        identifier: email,
        password: password,
      }),
    });

    const data = await res.json();
    if (data.jwt) {
      localStorage.setItem("token", data.jwt);
      console.log("Token Saved:", data.jwt);
      return { success: true, user: data.user };
    } else {
      console.error("Login failed:", data);
      return { success: false, error: data.error };
    }
  } catch (error) {
    console.error("Error:", error);
    return { success: false, error };
  }
};
