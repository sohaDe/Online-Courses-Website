import { useParams } from "react-router-dom";
import { courses } from "../data/CoursesData.js";
import { useState, useEffect } from "react";
import NotFound from "./NotFound";
import Button from "../components/Button";

const CourseDetails = ({ addToCart }) => {
  const { id } = useParams();
  const [course, setCourse] = useState(null);

  useEffect(() => {
    const foundCourse = courses.find((c) => c.id === parseInt(id));
    setCourse(foundCourse);
  }, [id]);

  const handleAddToCart = () => {
    const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";
    if (!isLoggedIn) {
      alert("You must login first");
      return;
    }
    addToCart(course);
  };

  if (!course) {
    return (
      <NotFound />
    );
  }

  return (
    <section className="pt-40 pb-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-3 gap-8">

          <div className="lg:col-span-2">
            <div className=" shadow-lg rounded-xl p-6">

              <div className="mb-6 border-b border-gray-200 pb-4">
                <h3 className="text-3xl font-bold text-[#0C448D] mb-3">
                  {course.title}
                </h3>
                <p className="text-gray-600">{course.shortDescription || "Course description"}</p>
              </div>

              <div className="mb-6">
                <img
                  src={course.image || "https://via.placeholder.com/800x400"}
                  className="w-full rounded-lg"
                  alt={course.title}
                />
              </div>

              <div className="border-b border-gray-200 pb-6">
                <h3 className="text-2xl font-bold mb-4">DESCRIPTION</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {course.fullDescription}
                </p>
              </div>

              <div className="py-6 border-b border-gray-200">
                <h3 className="text-2xl font-bold mb-4">TOPICS INCLUDED</h3>

                <div className="grid md:grid-cols-2 gap-4 text-gray-700">
                  {course.topics?.length ? (
                    course.topics.map((t, i) => (
                      <p key={i} className="flex items-center gap-2">
                        {t}
                      </p>
                    ))
                  ) : (
                    <>
                      <p> React</p>
                      <p> ES6+</p>
                      <p> Routing</p>
                      <p> Best Practices</p>
                    </>
                  )}
                </div>
              </div>

              <div className="pt-6">
                <h3 className="text-2xl font-bold mb-4">COURSE CONTENT</h3>

                <details className="border border-gray-200 rounded-d mb-3">
                  <summary className="cursor-pointer px-4 py-3 font-semibold bg-gray-100">
                    Section 1
                  </summary>
                  <p className="p-4 text-gray-700">
                    Course introduction and basics.
                  </p>
                </details>

                <details className="border border-gray-200 rounded-md mb-3">
                  <summary className="cursor-pointer px-4 py-3 font-semibold bg-gray-100">
                    Section 2
                  </summary>
                  <p className="p-4 text-gray-700">
                    Deep dive into concepts.
                  </p>
                </details>

                <details className="border border-gray-200 rounded-md">
                  <summary className="cursor-pointer px-4 py-3 font-semibold bg-gray-100">
                    Section 3
                  </summary>
                  <p className="p-4 text-gray-700">
                    Final projects & wrap-up.
                  </p>
                </details>
              </div>
            </div>
          </div>

          <div>
            <div className="bg-white shadow-xl rounded-xl p-6">
              <h3 className="text-2xl font-bold text-center mb-6 text-[#0C448D]">
                Course Information
              </h3>

              <ul className="space-y-3 text-gray-700 mb-6">
                <li className="flex justify-between">
                  <span>Duration:</span>
                  <span>{course.duration}</span>
                </li>
                <li className="flex justify-between">
                  <span>Level:</span>
                  <span>{course.level}</span>
                </li>
                <li className="flex justify-between">
                  <span>Category:</span>
                  <span>{course.category}</span>
                </li>
                <li className="flex justify-between">
                  <span>Language:</span>
                  <span>{course.language}</span>
                </li>
                <li className="flex justify-between">
                  <span>Lessons:</span>
                  <span>{course.lessonsCount}</span>
                </li>
                <li className="flex justify-between font-bold text-[#0C448D]">
                  <span>Price:</span>
                  <span>${course.price}</span>
                </li>
              </ul>

              <Button className="mb-4 w-full" onClick={handleAddToCart} variant="outline" size="md">
                Add to Cart
              </Button>




              <Button className="w-full" onClick={() => navigate(`/courses`)} variant="primary" size="md">
                ← Back to Courses
              </Button>


            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CourseDetails;
