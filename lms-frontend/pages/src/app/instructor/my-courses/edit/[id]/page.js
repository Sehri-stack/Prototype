'use client';

import { useEffect, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';

export default function EditCoursePage() {
  const { id } = useParams();
  const router = useRouter();

  const [course, setCourse] = useState(null);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [slug, setSlug] = useState('');

  useEffect(() => {
    const fetchCourse = async () => {
      try {
        const res = await fetch(`http://localhost:1337/api/courses/${id}`, {
          headers: {
            Authorization: 'Bearer YOUR_TOKEN_HERE',
          },
        });

        const data = await res.json();
        setCourse(data.data);
        setTitle(data.data.attributes.title);
        setDescription(data.data.attributes.description);
        setSlug(data.data.attributes.slug);
      } catch (error) {
        console.error('Error fetching course:', error);
      }
    };

    if (id) {
      fetchCourse();
    }
  }, [id]);

  const handleUpdate = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch(`http://localhost:1337/api/courses/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          Authorization: 'Bearer YOUR_TOKEN_HERE',
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
      console.log('Updated:', data);
      alert('Course updated successfully!');
      router.push('/instructor/my-courses');
    } catch (error) {
      console.error('Failed to update course:', error);
      alert('Update failed!');
    }
  };

  if (!course) return <p>Loading...</p>;

  return (
    <div className="container mt-4">
      <h2>Edit Course</h2>
      <form onSubmit={handleUpdate}>
        <div className="mb-3">
          <label className="form-label">Title</label>
          <input
            className="form-control"
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Description</label>
          <textarea
            className="form-control"
            rows="3"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          ></textarea>
        </div>

        <div className="mb-3">
          <label className="form-label">Slug</label>
          <input
            className="form-control"
            type="text"
            value={slug}
            onChange={(e) => setSlug(e.target.value)}
            required
          />
        </div>

        <button type="submit" className="btn btn-success">
          Update Course
        </button>
      </form>
    </div>
  );
}
