import { useRouter } from "next/router";
import { useState } from "react";
import {
  FaBook,
  FaUpload,
  FaUsers,
  FaComments,
  FaSignOutAlt,
} from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";

const InstructorProfile = () => {
  const router = useRouter();
  const [instructor, setInstructor] = useState({
    name: "John Doe",
    email: "johndoe@example.com",
    bio: "Passionate educator with 5+ years of experience in online teaching.",
    profilePic: "/next.svg",
  });

  // Logout Function
  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    alert("Logged out successfully!");
    router.push("/Login");
  };

  return (
    <div className="container mt-5">
      <div className="card shadow-lg p-4">
        {/* Profile Header */}
        <div className="text-center">
          <img
            src={instructor.profilePic}
            alt="Profile Picture"
            className="rounded-circle mb-3"
            width="120"
          />
          <h3>{instructor.name}</h3>
          <p className="text-muted">{instructor.email}</p>
          <p>{instructor.bio}</p>
        </div>

        <hr />

        {/* Profile Options */}
        <div className="row text-center">
          {/* Manage Courses */}
          <div className="col-md-3 mb-3">
            <button
              className="btn btn-primary w-100 d-flex align-items-center justify-content-center"
              onClick={() => router.push("/manage-courses")}
            >
              <FaBook className="me-2" /> Manage Courses
            </button>
          </div>

          {/* Upload Media */}
          <div className="col-md-3 mb-3">
            <button
              className="btn btn-success w-100 d-flex align-items-center justify-content-center"
              onClick={() => router.push("/upload-media")}
            >
              <FaUpload className="me-2" /> Upload Media
            </button>
          </div>

          {/* Manage Enrollments */}
          <div className="col-md-3 mb-3">
            <button
              className="btn btn-info w-100 d-flex align-items-center justify-content-center"
              onClick={() => router.push("/student-enrollments")}
            >
              <FaUsers className="me-2" /> View Enrollments
            </button>
          </div>

          {/* View Feedback */}
          <div className="col-md-3 mb-3">
            <button
              className="btn btn-warning w-100 d-flex align-items-center justify-content-center"
              onClick={() => router.push("/view-feedback")}
            >
              <FaComments className="me-2" /> View Feedback
            </button>
          </div>
        </div>

        <hr />

        {/* Logout Button */}
        <div className="text-center">
          <button
            className="btn btn-danger w-100 d-flex align-items-center justify-content-center"
            onClick={handleLogout}
          >
            <FaSignOutAlt className="me-2" /> Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default InstructorProfile;
