import CourseList from "@/components/CourseList"; // ✅ Import CourseList

export default function CoursesPage() {
  return (
    <div>
      <h1>Courses Page</h1>
      <CourseList /> {/* ✅ CourseList ko render karna zaroori hai */}
    </div>
  );
}
