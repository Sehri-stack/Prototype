'use client';

import { useState } from 'react';

export default function InstructorForm() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [slug, setSlug] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("http://localhost:1337/api/courses", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": "Bearer YOUR_TOKEN_HERE" // Replace with your actual token
        },
        body: JSON.stringify({
          data: {
            title,
            description,
            slug,
          },
        }),
      });

      const data = await res.json();
      console.log(data);
      alert('Course created successfully!');
      setTitle('');
      setDescription('');
      setSlug('');
    } catch (error) {
      console.error('Error creating course:', error);
      alert('Failed to create course');
    }
  };

  return (
    <div className="container mt-4">
      <h2>Create New Course</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">Course Title</label>
          <input
            type="text"
            className="form-control"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="description" className="form-label">Course Description</label>
          <textarea
            className="form-control"
            id="description"
            rows="3"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          ></textarea>
        </div>

        <div className="mb-3">
          <label htmlFor="slug" className="form-label">Course Slug</label>
          <input
            type="text"
            className="form-control"
            id="slug"
            value={slug}
            onChange={(e) => setSlug(e.target.value)}
            required
          />
        </div>

        <button type="submit" className="btn btn-primary">Create Course</button>
      </form>
    </div>
  );
}
