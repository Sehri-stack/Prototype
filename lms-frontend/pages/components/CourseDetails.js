import React from "react";
import { useParams } from "react-router-dom";  // If using React Router
import CourseDetails from "./components/CourseDetails";  // Adjust the path as necessary

function CoursePage() {
  const { courseId } = useParams();  // Get courseId from URL params

  return (
    <div>
      <CourseDetails courseId={courseId} />
    </div>
  );
}

export default CoursePage;
