import { useState } from "react";
import { courses } from "../data/CoursesData.js";
import { useNavigate } from "react-router-dom";
import SectionHeader from "../components/SectionHeader";
import Button from "../components/Button";



const Courses = ({ addToCart }) => {

  const navigate = useNavigate();

  const [currentPage, setCurrentPage] = useState(1);
  const coursesPerPage = 6;

  const indexOfLast = currentPage * coursesPerPage;
  const indexOfFirst = indexOfLast - coursesPerPage;

  const currentCourses = courses.slice(indexOfFirst, indexOfLast);
  const totalPages = Math.ceil(courses.length / coursesPerPage);

  const handleAddToCart = () => {
    const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";
    if (!isLoggedIn) {
      alert("You must login first");
      return;
    }
    addToCart(course);
  };


  return (
    <section className="pt-40 pb-20 bg-white" id="courses">



      <SectionHeader
        title=" Popular Courses"
        subtitle="H Learn the most in-demand skills with expert-led courses designed to help you grow"
        align="center"
      />

      <div className="max-w-7xl mx-auto grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8 px-6">

        {currentCourses.map(course => (
          <div
            key={course.id}
            className="
              bg-white rounded-2xl shadow-md overflow-hidden 
              hover:shadow-2xl hover:-translate-y-1 transition duration-300
            "
          >

            <div className="h-48 w-full overflow-hidden">
              <img
                src={course.image}
                alt={course.title}
                className="w-full h-full object-contain"
              />
            </div>

            <div className="p-5">
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                {course.title}
              </h3>

              <p className="text-gray-600 mb-4">
                {course.shortDescription}
              </p>

              <div className="flex items-center justify-between text-sm mb-4">
                <span className="text-[#0c448d] font-semibold">
                  Level: {course.level}
                </span>

                <span className="text-[#f05f18] font-bold">
                  ${course.price}
                </span>
              </div>

              <div className="flex justify-between items-center">


                <Button onClick={() => navigate(`/courses/${course.id}`)} variant="primary" size="sm">
                  View Details
                </Button>


                <Button onClick={() => {
                  const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";
                  if (!isLoggedIn) {
                    alert("You must login first");
                    return;
                  }

                  addToCart(course);
                }} variant="outline" size="sm">
                  Add to Cart
                </Button>

              </div>
            </div>
          </div>
        ))}

      </div>

      <div className="flex justify-center mt-10 gap-2">
        {[...Array(totalPages)].map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentPage(index + 1)}
            className={`px-6 py-3 rounded-md font-semibold transition-all duration-300 shadow cursor-pointer
        ${currentPage === index + 1
                ? "bg-[#0c448d] text-white shadow-lg"
                : "bg-white text-gray-700 border border-gray-300 hover:bg-[#0c448d] hover:text-white"
              }`}
          >
            {index + 1}
          </button>
        ))}
      </div>



    </section>
  );
};

export default Courses;
