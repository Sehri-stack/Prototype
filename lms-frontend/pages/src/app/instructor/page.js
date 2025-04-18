'use client';

import { useState } from 'react';

export default function InstructorForm() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [slug, setSlug] = useState('');
  const [cover, setCover] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("files.cover", cover);
    formData.append("data", JSON.stringify({
      title,
      description,
      slug,
    }));

    try {
      const res = await fetch("http://localhost:1337/api/courses", {
        method: "POST",
        headers: {
          Authorization: "Bearer YOUR_TOKEN_HERE"
        },
        body: formData,
      });

      const data = await res.json();
      console.log(data);
      alert('Course with image uploaded!');
      setTitle('');
      setDescription('');
      setSlug('');
      setCover(null);
    } catch (error) {
      console.error('Error:', error);
      alert('Image upload failed');
    }
  };

  return (
    <div className="container mt-4">
      <h2>Create New Course</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Title</label>
          <input type="text" className="form-control" value={title} onChange={(e) => setTitle(e.target.value)} required />
        </div>

        <div className="mb-3">
          <label className="form-label">Description</label>
          <textarea className="form-control" rows="3" value={description} onChange={(e) => setDescription(e.target.value)} required />
        </div>

        <div className="mb-3">
          <label className="form-label">Slug</label>
          <input type="text" className="form-control" value={slug} onChange={(e) => setSlug(e.target.value)} required />
        </div>

        <div className="mb-3">
          <label className="form-label">Course Image</label>
          <input type="file" className="form-control" onChange={(e) => setCover(e.target.files[0])} />
        </div>

        <button type="submit" className="btn btn-primary">Create Course</button>
      </form>
    </div>
  );
}
