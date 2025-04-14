// fetchCourses.js

// Fetch all courses
export async function fetchCourses() {
  try {
    const res = await fetch("http://localhost:1337/api/courses?populate=category,tags,Image", {
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!res.ok) {
      throw new Error(`Error ${res.status}: ${res.statusText}`);
    }

    const data = await res.json();
    return data.data;
  } catch (error) {
    console.error("Error fetching courses:", error.message);
    return [];
  }
}

// Fetch a single course by ID
export async function fetchCourseById(id) {
  try {
    const res = await fetch(`http://localhost:1337/api/courses/${id}?populate=deep`, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!res.ok) {
      throw new Error(`Error ${res.status}: ${res.statusText}`);
    }

    const json = await res.json();
    return json.data;
  } catch (err) {
    console.error("Failed to fetch course:", err);
    return null;
  }
}
