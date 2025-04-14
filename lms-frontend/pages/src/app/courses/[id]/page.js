// src/app/courses/[id]/page.js

import React from "react";

async function getCourse(id) {
  const res = await fetch(`http://localhost:1337/api/courses/${id}?populate=category,tags,Image`);
  const data = await res.json();
  return data.data;
}

export default async function CourseDetailPage({ params }) {
  const course = await getCourse(params.id);
  const { Title, Description, category, tags, Image } = course.attributes;

  return (
    <div className="container py-5">
      <h1>{Title}</h1>
      <img
        src={Image?.data?.attributes?.url || "/placeholder.jpg"}
        alt={Title}
        style={{ maxWidth: "100%", height: "auto" }}
      />
      <p>{Description}</p>

      {category?.data && (
        <p>
          <strong>Category:</strong> {category.data.attributes.name}
        </p>
      )}

      {tags?.data?.length > 0 && (
        <p>
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
  );
}
