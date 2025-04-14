"use client";
import { useEffect, useState } from "react";
import { fetchCourses } from "./utils/fetchCourses";
import Link from "next/link";

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
          courses.map((course) => {
            const { Title, Description, Image, category, tags } = course.attributes;

            return (
              <div key={course.id} className="col-md-4 mb-4">
                <Link href={`/courses/${course.id}`} className="text-decoration-none text-dark">
                  <div className="card h-100">
                    <img
                      src={Image?.data?.attributes?.url || "/placeholder.jpg"}
                      alt={Title}
                      className="card-img-top"
                    />
                    <div className="card-body">
                      <h5 className="card-title">{Title}</h5>
                      <p className="card-text">{Description}</p>

                      {/* Category */}
                      {category?.data?.attributes?.name && (
                        <p className="text-muted">
                          <strong>Category:</strong> {category.data.attributes.name}
                        </p>
                      )}

                      {/* Tags */}
                      {tags?.data?.length > 0 && (
                        <p className="text-muted">
                          <strong>Tags:</strong>{" "}
                          {tags.data.map((tag, i) => (
                            <span key={tag.id}>
                              {tag.attributes.name}
                              {i < tags.data.length - 1 ? ", " : ""}
                            </span>
                          ))}
                        </p>
                      )}
                    </div>
                  </div>
                </Link>
              </div>
            );
          })
        ) : (
          <p>No courses available.</p>
        )}
      </div>
    </div>
  );
}
