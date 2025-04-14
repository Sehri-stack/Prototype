// src/app/instructor/page.js
"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function InstructorPanel() {
  const router = useRouter();
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Simulate auth check
    const loggedInUser = JSON.parse(localStorage.getItem("user"));
    if (!loggedInUser || loggedInUser.role !== "instructor") {
      router.push("/login"); // redirect if not instructor
    } else {
      setUser(loggedInUser);
    }
  }, []);

  if (!user) return <p>Loading...</p>;

  return (
    <div className="container py-5">
      <h1>Welcome, {user.username}</h1>
      <p>This is your instructor dashboard.</p>
    </div>
  );
}
