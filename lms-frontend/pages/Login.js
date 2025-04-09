import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { login } from "../public/utils/auth";

const LoginPage = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Check if user is already logged in
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      router.push("/");
    }
  }, []);

  const handleLogin = async (e) => {
    e.preventDefault();
    const res = await login(email, password);

    if (res.success) {
      alert("Login Successful");

      // Redirect based on user role
      if (res.user?.isInstructor) {
        router.push("/instructor");
      } else {
        router.push("/studentProfile");
      }
    } else {
      alert("Login Failed: " + res.error?.message);
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
      <div className="card p-4 shadow-lg" style={{ width: "400px" }}>
        <h2 className="text-center mb-4">Login</h2>
        <form onSubmit={handleLogin}>
          {/* Email Input */}
          <div className="mb-3">
            <label className="form-label">Email</label>
            <input
              type="email"
              className="form-control"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          {/* Password Input */}
          <div className="mb-3">
            <label className="form-label">Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          {/* Submit Button */}
          <button type="submit" className="btn btn-primary w-100">
            Login
          </button>
        </form>

        {/* Signup Link */}
        <p className="text-center mt-3">
          Don't have an account?{" "}
          <a href="/register" className="text-primary">
            Sign Up
          </a>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
