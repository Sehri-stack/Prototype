"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  const router = useRouter();
  const [mounted, setMounted] = useState(false);

  // Sample course data
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

  // Popular topic categories
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

  // Set mounted after initial render for animations
  useEffect(() => {
    setMounted(true);
  }, []);

  // Star Rating Component
  const StarRating = ({ rating, reviews }) => {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;

    return (
      <div className="d-flex align-items-center">
        {[...Array(5)].map((_, i) => (
          <i
            key={i}
            className={`bi ${
              i < fullStars
                ? "bi-star-fill text-warning"
                : i === fullStars && hasHalfStar
                ? "bi-star-half text-warning"
                : "bi-star text-secondary"
            }`}
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
                mounted
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-4"
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
                <Link href="/" className="btn btn-primary btn-lg px-5 py-3">
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

      {/* Categories Section */}
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
                  mounted
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-4"
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
                    <StarRating
                      rating={course.rating}
                      reviews={course.reviews}
                    />
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
            <Link href="/" className="btn btn-outline-dark btn-lg px-5 py-3">
              View all courses
            </Link>
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="bg-dark py-5">
        <div className="container text-center">
          <h2 className="h2 fw-bold text-white mb-4">What our students say</h2>

          <div className="row row-cols-1 row-cols-md-3 g-4">
            {[1, 2, 3].map((item) => (
              <div
                key={item}
                className={`col ${
                  mounted
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-4"
                } transition-all duration-700 ease-out`}
                style={{ transitionDelay: `${200 * item}ms` }}
              >
                <div className="card bg-secondary text-white h-100">
                  <div className="card-body">
                    <div className="d-flex justify-content-center mb-3">
                      {[...Array(5)].map((_, i) => (
                        <i key={i} className="bi bi-star-fill text-warning"></i>
                      ))}
                    </div>
                    <p className="card-text fst-italic mb-3">
                      &quot;This platform transformed how I approach learning.
                      The courses are comprehensive and the instructors are
                      top-notch.&quot;
                    </p>
                    <p className="card-text text-info fw-semibold">
                      - Student Name
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-primary py-5">
        <div className="container text-center">
          <h2 className="h2 fw-bold text-white mb-4">
            Ready to start learning?
          </h2>
          <p className="lead text-light mb-4">
            Join thousands of students already learning on our platform. Get
            unlimited access to all courses.
          </p>

          <div className="d-flex flex-column flex-md-row justify-content-center gap-3">
            <Link href="/register" className="btn btn-light btn-lg px-5 py-3">
              Sign up for free
            </Link>
            <Link href="/" className="btn btn-outline-light btn-lg px-5 py-3">
              Browse courses
            </Link>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-light py-5">
        <div className="container">
          <div className="row row-cols-1 row-cols-md-4 g-4">
            <div>
              <h3 className="h6 text-uppercase text-secondary">Platform</h3>
              <ul className="list-unstyled mt-3">
                <li>
                  <Link
                    href="#"
                    className="text-decoration-none text-secondary"
                  >
                    About us
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-decoration-none text-secondary"
                  >
                    Contact us
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-decoration-none text-secondary"
                  >
                    Careers
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-decoration-none text-secondary"
                  >
                    Blog
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="h6 text-uppercase text-secondary">Courses</h3>
              <ul className="list-unstyled mt-3">
                <li>
                  <Link
                    href="#"
                    className="text-decoration-none text-secondary"
                  >
                    Web Development
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-decoration-none text-secondary"
                  >
                    JavaScript
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-decoration-none text-secondary"
                  >
                    React
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-decoration-none text-secondary"
                  >
                    Node.js
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="h6 text-uppercase text-secondary">Support</h3>
              <ul className="list-unstyled mt-3">
                <li>
                  <Link
                    href="#"
                    className="text-decoration-none text-secondary"
                  >
                    Help center
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-decoration-none text-secondary"
                  >
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-decoration-none text-secondary"
                  >
                    Terms of service
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-decoration-none text-secondary"
                  >
                    Privacy policy
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="h6 text-uppercase text-secondary">
                Stay connected
              </h3>
              <p className="text-secondary mt-3">
                Subscribe to our newsletter for latest updates.
              </p>
              <div className="mt-3">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="form-control mb-2"
                />
                <button className="btn btn-primary w-100">Subscribe</button>
              </div>
            </div>
          </div>
          <div className="border-top mt-5 pt-4">
            <p className="text-center text-secondary">
              &copy; 2025 E-Learning Platform. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
