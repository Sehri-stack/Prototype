import { useState } from "react";
import { useRouter } from "next/router";

const Register = () => {
  const router = useRouter();
  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
  });

  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const registerUser = async () => {
    try {
      const res = await fetch("http://localhost:1337/api/auth/local/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });

      const data = await res.json();

      if (res.ok) {
        setMessage("✅ User registered successfully! Redirecting...");
        setTimeout(() => router.push("/login"), 2000);
      } else {
        setMessage(`❌ Error: ${data.error.message}`);
      }
    } catch (error) {
      console.error("Request failed:", error);
      setMessage("❌ Something went wrong!");
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
      <div className="card p-4 shadow-lg" style={{ width: "400px" }}>
        <h2 className="text-center mb-4">Register</h2>

        {/* Username Input */}
        <div className="mb-3">
          <label className="form-label">Username</label>
          <input
            type="text"
            name="username"
            className="form-control"
            placeholder="Enter username"
            onChange={handleChange}
            required
          />
        </div>

        {/* Email Input */}
        <div className="mb-3">
          <label className="form-label">Email</label>
          <input
            type="email"
            name="email"
            className="form-control"
            placeholder="Enter email"
            onChange={handleChange}
            required
          />
        </div>

        {/* Password Input */}
        <div className="mb-3">
          <label className="form-label">Password</label>
          <input
            type="password"
            name="password"
            className="form-control"
            placeholder="Enter password"
            onChange={handleChange}
            required
          />
        </div>

        {/* Register Button */}
        <button onClick={registerUser} className="btn btn-primary w-100">
          Register
        </button>

        {/* Login Link */}
        <p className="text-center mt-3">
          Already have an account?{" "}
          <a href="/Login" className="text-primary">
            Login here
          </a>
        </p>

        {/* Message Display */}
        {message && (
          <div className="alert alert-info text-center mt-3">{message}</div>
        )}
      </div>
    </div>
  );
};

export default Register;
