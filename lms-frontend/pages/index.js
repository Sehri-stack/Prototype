"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { fetchCourses } from "./utils/fetchCourses";

export default function Home() {
  const router = useRouter();
  const [mounted, setMounted] = useState(false);
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    setMounted(true);

    const getCourses = async () => {
      const data = await fetchCourses();
      setCourses(data);
    };

    getCourses();
  }, []);

  const featuredCourses = [
    {
      id: 1,
      title: "Complete Web Development Bootcamp",
      instructor: "Sarah Johnson",
      rating: 4.8,
      reviews: 1254,
      price: 12.99,
      originalPrice: 89.99,
      image: "/api/placeholder/400/2778464.jpg",
      tag: "Bestseller",
    },
    {
      id: 2,
      title: "Modern JavaScript for Beginners",
      instructor: "Michael Chen",
      rating: 4.6,
      reviews: 842,
      price: 9.99,
      originalPrice: 59.99,
      image: "/api/placeholder/400/13513523.jpg",
    },
    {
      id: 3,
      title: "Advanced React & Redux Techniques",
      instructor: "Alex Rodriguez",
      rating: 4.9,
      reviews: 976,
      price: 14.99,
      originalPrice: 94.99,
      image: "/api/placeholder/400/2778464.jpg",
      tag: "Highest Rated",
    },
    {
      id: 4,
      title: "Mastering TypeScript",
      instructor: "Emily Parker",
      rating: 4.7,
      reviews: 621,
      price: 11.99,
      originalPrice: 74.99,
      image: "/api/placeholder/400/13513523.jpg",
    },
  ];

  const categories = [
    "Web Development",
    "JavaScript",
    "React",
    "Next.js",
    "TypeScript",
    "Node.js",
    "CSS",
    "HTML",
    "Full Stack",
    "Front End",
    "Back End",
    "API Development",
  ];

  const StarRating = ({ rating, reviews }) => {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;

    return (
      <div className="d-flex align-items-center">
        {[...Array(5)].map((_, i) => (
          <i
            key={i}
            className={
              i < fullStars
                ? "bi bi-star-fill text-warning"
                : i === fullStars && hasHalfStar
                ? "bi bi-star-half text-warning"
                : "bi bi-star text-secondary"
            }
          ></i>
        ))}
        <span className="ms-1 fw-semibold text-dark">{rating}</span>
        <span className="ms-1 text-secondary">({reviews})</span>
      </div>
    );
  };

  return (
    <div className="min-vh-100 bg-white">
      {/* Hero Section */}
      <div className="bg-light">
        <div className="container py-5">
          <div className="row align-items-center">
            <div
              className={`col-md-6 ${
                mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              } transition-all duration-700 ease-out`}
            >
              <h1 className="display-4 fw-bold text-dark">
                Always something new to learn
              </h1>
              <p className="lead text-secondary mt-4">
                With courses added regularly to our catalog, you can gain access
                to the latest skills. Special offer: all courses from $9.99 ends
                today!
              </p>
              <div className="mt-4">
                <Link href="/courses" className="btn btn-primary btn-lg px-5 py-3">
                  Browse Courses
                </Link>
              </div>
            </div>
            <div
              className={`col-md-6 mt-4 mt-md-0 ${
                mounted ? "opacity-100 scale-100" : "opacity-0 scale-95"
              } transition-all duration-700 delay-200 ease-out`}
            >
              <div className="rounded overflow-hidden shadow">
                <Image
                  src="/api/placeholder/600/homepage-banner.jpg"
                  alt="Student learning online"
                  width={600}
                  height={400}
                  className="img-fluid"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Categories */}
      <div className="bg-light py-5">
        <div className="container">
          <h2 className="h2 fw-bold text-dark mb-4">
            All the skills you need in one place
          </h2>
          <p className="lead text-secondary mb-4">
            From essential skills to technical topics, our platform supports
            your professional development.
          </p>

          <div className="d-flex overflow-auto pb-3">
            {categories.map((category, index) => (
              <Link
                key={index}
                href="/"
                className={`btn ${
                  index === 0 ? "btn-dark" : "btn-outline-dark"
                } me-2`}
              >
                {category}
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Featured Courses */}
      <div className="py-5">
        <div className="container">
          <h2 className="h2 fw-bold text-dark mb-4">Featured Courses</h2>

          <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4">
            {featuredCourses.map((course, index) => (
              <div
                key={course.id}
                className={`col ${
                  mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                } transition-all duration-500 ease-out`}
                style={{ transitionDelay: `${150 * index}ms` }}
              >
                <div className="card h-100 shadow-sm">
                  <Image
                    src={course.image}
                    alt={course.title}
                    width={400}
                    height={225}
                    className="card-img-top"
                  />
                  {course.tag && (
                    <span className="badge bg-warning text-dark position-absolute top-0 start-0 m-2">
                      {course.tag}
                    </span>
                  )}
                  <div className="card-body">
                    <h3 className="card-title text-dark fw-semibold">
                      {course.title}
                    </h3>
                    <p className="card-text text-secondary">
                      {course.instructor}
                    </p>
                    <StarRating rating={course.rating} reviews={course.reviews} />
                    <div className="mt-2">
                      <span className="text-dark fw-bold">${course.price}</span>
                      <span className="text-secondary text-decoration-line-through ms-2">
                        ${course.originalPrice}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-5">
            <Link href="/courses" className="btn btn-outline-dark btn-lg px-5 py-3">
              View all courses
            </Link>
          </div>
        </div>
      </div>

      {/* Live Courses from Strapi */}
      <div className="py-5 bg-light">
        <div className="container">
          <h2 className="h2 fw-bold text-dark mb-4">All Courses (Live from API)</h2>

          {courses.length === 0 ? (
            <p>Loading courses...</p>
          ) : (
            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4">
              {courses.map((course) => (
                <div key={course.id} className="col">
                  <div className="card h-100 shadow-sm">
                    <Image
                      src={course.image?.url || "/api/placeholder/400/default.jpg"}
                      alt={course.title}
                      width={400}
                      height={225}
                      className="card-img-top"
                    />
                    <div className="card-body">
                      <h3 className="card-title text-dark fw-semibold">
                        {course.title}
                      </h3>
                      <p className="card-text text-secondary">{course.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Footer Section */}
      <footer className="bg-dark text-white pt-5 pb-3 mt-5">
        <div className="container">
          <div className="row">

            {/* About */}
            <div className="col-md-4 mb-4">
              <h5 className="fw-bold">E-Learnify</h5>
              <p className="text-secondary">
                Learn at your own pace with curated, expert-led courses.
              </p>
            </div>

            {/* Quick Links */}
            <div className="col-md-4 mb-4">
              <h5 className="fw-bold">Quick Links</h5>
              <ul className="list-unstyled">
                <li><Link href="/" className="text-secondary text-decoration-none">Home</Link></li>
                <li><Link href="/courses" className="text-secondary text-decoration-none">Courses</Link></li>
                <li><Link href="/about" className="text-secondary text-decoration-none">About</Link></li>
                <li><Link href="/contact" className="text-secondary text-decoration-none">Contact</Link></li>
              </ul>
            </div>

            {/* Contact Info */}
            <div className="col-md-4 mb-4">
              <h5 className="fw-bold">Get in Touch</h5>
              <p className="text-secondary mb-1">Email: support@elearnify.com</p>
              <p className="text-secondary mb-0">Phone: +1 234 567 890</p>
            </div>
          </div>

          <hr className="border-secondary" />

          <div className="text-center text-secondary">
            &copy; {new Date().getFullYear()} E-Learnify. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
