// utils/fetchCourses.js

export async function fetchCourses() {
  try {
    const res = await fetch("http://localhost:1337/api/courses?populate=*", {
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!res.ok) {
      throw new Error("Failed to fetch courses");
    }

    const data = await res.json();
    return data.data; // Strapi returns data inside 'data'
  } catch (error) {
    console.error("Error fetching courses:", error);
    return [];
  }
}
