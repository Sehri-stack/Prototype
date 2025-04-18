'use client';

import { useEffect, useState } from 'react';

export default function MyCourses() {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    const fetchCourses = async () => {
      const res = await fetch("http://localhost:1337/api/courses?populate=cover", {
        headers: {
          Authorization: "Bearer YOUR_TOKEN_HERE", // Replace with your token
        },
      });
      const data = await res.json();
      setCourses(data.data);
    };

    fetchCourses();
  }, []);

  const handleDelete = async (id) => {
    const confirmed = confirm("Are you sure you want to delete this course?");
    if (!confirmed) return;

    await fetch(`http://localhost:1337/api/courses/${id}`, {
      method: "DELETE",
      headers: {
        Authorization: "Bearer YOUR_TOKEN_HERE", // Replace with your token
      },
    });

    setCourses(courses.filter((course) => course.id !== id));
    alert("Course deleted successfully!");
  };

  return (
    <div className="container mt-4">
      <h2>My Courses</h2>
      {courses.length === 0 && <p>No courses found.</p>}
      {courses.map((course) => (
        <div key={course.id} className="card mb-3">
          <div className="card-body">
            <h5 className="card-title">{course.attributes.title}</h5>
            <p className="card-text">{course.attributes.description}</p>
            {course.attributes.cover?.data && (
              <img
                src={`http://localhost:1337${course.attributes.cover.data.attributes.url}`}
                alt="Cover"
                style={{ maxWidth: '200px' }}
              />
            )}
            <br />
            <button
              className="btn btn-warning me-2"
              onClick={() => alert("Update form coming soon...")}
            >
              Edit
            </button>
            <button
              className="btn btn-danger"
              onClick={() => handleDelete(course.id)}
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
