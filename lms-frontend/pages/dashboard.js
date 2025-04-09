import { useState, useEffect } from "react";
import { useRouter } from "next/router";

const Dashboard = () => {
  const [user, setUser] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const fetchUser = async () => {
      const token = localStorage.getItem("token");
      if (!token) {
        router.push("/login"); // Agar token nahi hai to login pe bhej do
        return;
      }

      try {
        const res = await fetch("http://localhost:1337/api/users/me", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        const data = await res.json();
        setUser(data);
      } catch (error) {
        console.error("Error fetching user data", error);
        router.push("/login"); //  Error ho to bhi login pe redirect karein
      }
    };

    fetchUser();
  }, []);
  const logout = () => {
    localStorage.removeItem("token");
    router.push("/login");
  };

  return (
    <div>
      <h2>Welcome, {user?.username || "Guest"}</h2>
      <p>Your role: {user?.role?.name}</p>
      <button onClick={logout}>Logout</button>
    </div>
  );
};

export default Dashboard;
