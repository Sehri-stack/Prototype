import Image from "next/image";
import Link from "next/link";

const LearnWithoutLimits = () => {
  return (
    <div className="container my-5">
      <div className="row align-items-center">
        {/* Left Side: Text Content */}
        <div className="col-md-6">
          <h1 className="fw-bold">Learn Without Limits</h1>
          <p className="lead">
            Start, switch, or advance your career with more than 10,000 courses,
            Professional Certificates, and degrees from world-class universities
            and companies.
          </p>
          <div className="mt-4">
            <Link href="/signup" className="btn btn-primary me-3">
              Join for Free
            </Link>
            <Link href="/courses" className="btn btn-outline-primary">
              Try Courses
            </Link>
          </div>
        </div>

        {/* Right Side: Image */}
        <div className="col-md-6 text-center">
          <Image
            src="/https://media.istockphoto.com/id/1159212661/photo/portrait-of-successful-young-asian-businesswoman%C3%A2%C2%A0at-office-colleagues-in-background.jpg?s=612x612&w=0&k=20&c=iXO5_SFF7aEj2x7zLqdhW1ZxzEoPpkSYVo-xs6uAh-k=" // Replace with your image path in public folder
            alt="Learning Image"
            width={500}
            height={300}
            className="img-fluid rounded"
          />
        </div>
      </div>
    </div>
  );
};

export default LearnWithoutLimits;
