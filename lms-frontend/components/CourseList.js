"use client";
import { useEffect, useState } from "react";
import { fetchCourses } from "public/utils/fetchCourses";

export default function CourseList() {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    async function getCourses() {
      const data = await fetchCourses();
      setCourses(data);
    }
    getCourses();
  }, []);

  return (
    <div className="container py-5">
      <h2 className="fw-bold mb-4">Available Courses</h2>
      <div className="row">
        {courses && courses.length > 0 ? (
          courses.map((course) => (
            <div key={course.id} className="col-md-4 mb-4">
              <div className="card h-100">
                <img
                  src={course.attributes.Image?.url || "/placeholder.jpg"}
                  alt={course.attributes.Title}
                  className="card-img-top"
                />
                <div className="card-body">
                  <h5 className="card-title">{course.attributes.Title}</h5>
                  <p className="card-text">{course.attributes.Description}</p>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p>No courses available.</p>
        )}
      </div>
    </div>
  );
}
