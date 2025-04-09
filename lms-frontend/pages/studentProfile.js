import { useRouter } from "next/router";
import { useState } from "react";
import {
  FaBook,
  FaCertificate,
  FaCommentDots,
  FaSignOutAlt,
} from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";

const StudentProfile = () => {
  const router = useRouter();
  const [student, setStudent] = useState({
    name: "Jane Doe",
    email: "janedoe@example.com",
    profilePic: "/next.svg",
    enrolledCourses: [
      { id: 1, title: "React for Beginners", progress: 75 },
      { id: 2, title: "Next.js Advanced", progress: 40 },
    ],
    certificates: [
      { id: 1, course: "React for Beginners", link: "/certificates/react.pdf" },
    ],
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
            src={student.profilePic}
            alt="Profile Picture"
            className="rounded-circle mb-3"
            width="120"
          />
          <h3>{student.name}</h3>
          <p className="text-muted">{student.email}</p>
        </div>

        <hr />

        {/* Profile Options */}
        <div className="row text-center">
          {/* View Enrolled Courses */}
          <div className="col-md-4 mb-3">
            <button
              className="btn btn-primary w-100 d-flex align-items-center justify-content-center"
              onClick={() => router.push("/my-courses")}
            >
              <FaBook className="me-2" /> My Courses
            </button>
          </div>

          {/* View Certificates */}
          <div className="col-md-4 mb-3">
            <button
              className="btn btn-success w-100 d-flex align-items-center justify-content-center"
              onClick={() => router.push("/certificates")}
            >
              <FaCertificate className="me-2" /> My Certificates
            </button>
          </div>

          {/* Provide Feedback */}
          <div className="col-md-4 mb-3">
            <button
              className="btn btn-warning w-100 d-flex align-items-center justify-content-center"
              onClick={() => router.push("/course-feedback")}
            >
              <FaCommentDots className="me-2" /> Course Feedback
            </button>
          </div>
        </div>

        <hr />

        {/* Enrolled Courses Section */}
        <h5 className="mt-4">📚 Enrolled Courses</h5>
        <ul className="list-group">
          {student.enrolledCourses.map((course) => (
            <li
              key={course.id}
              className="list-group-item d-flex justify-content-between"
            >
              {course.title}
              <span className="badge bg-primary">
                {course.progress}% Completed
              </span>
            </li>
          ))}
        </ul>

        {/* Certificates Section */}
        {student.certificates.length > 0 && (
          <>
            <h5 className="mt-4">🎓 Earned Certificates</h5>
            <ul className="list-group">
              {student.certificates.map((cert) => (
                <li
                  key={cert.id}
                  className="list-group-item d-flex justify-content-between"
                >
                  {cert.course}
                  <a
                    href={cert.link}
                    download
                    className="btn btn-sm btn-success"
                  >
                    Download
                  </a>
                </li>
              ))}
            </ul>
          </>
        )}
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

export default StudentProfile;
