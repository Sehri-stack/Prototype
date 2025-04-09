import Link from "next/link";
import { useState } from "react";

const Header = () => {
  const [search, setSearch] = useState("");

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light px-3">
      <div className="container-fluid">
        {/* Left Side: Logo and Search Bar */}
        <Link href="/" className="navbar-brand fw-bold">
          Modern E-Learning
        </Link>

        <form className="d-flex ms-3">
          <input
            className="form-control me-2"
            type="search"
            placeholder="Search courses..."
            aria-label="Search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <button className="btn btn-outline-primary" type="submit">
            Search
          </button>
        </form>

        {/* Right Side: Login, Sign Up, Courses, Become Instructor */}
        <div className="ms-auto">
          <Link href="/courses" className="btn btn-outline-secondary me-2">
            Courses
          </Link>
          <Link href="/Login" className="btn btn-outline-primary me-2">
            Login
          </Link>
          <Link href="/register" className="btn btn-primary me-2">
            Sign Up
          </Link>
          <Link href="/instructorReg" className="btn btn-warning">
            Become Instructor
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Header;
