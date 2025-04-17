import { useEffect, useState } from "react";
import CourseList from "./components/CourseList";
import { fetchCourses } from "./utils/fetchCourses";


export default function CoursesPage() {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    const getCourses = async () => {
      const data = await fetchCourses();
      setCourses(data);
    };

    getCourses();
  }, []);

  return (
    <div>
      <h1 style={{ textAlign: "center", margin: "2rem 0" }}>All Courses</h1>
      <CourseList courses={courses} />
    </div>
  );
}
