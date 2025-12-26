import NotFoundImage from '../assets/images/404otf.png';

const NotFound = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#0c448d] to-[#f05f18] px-6">
      <div className=" max-w-4xl w-full grid grid-cols-1 md:grid-cols-2 items-center gap-8">

        <div className="flex justify-center">
          <img
            src={NotFoundImage}
            alt="Not Found Illustration"
            className="w-72 md:w-80 drop-shadow-lg"
          />
        </div>

        <div className="text-center md:text-right">

          <h2 className="text-2xl font-bold mt-3 text-gray-900">
            Course Not Found
          </h2>

          <p className="text-white mt-2 leading-relaxed">
            Sorry, we couldn’t find the course you’re looking for.
            It may have been removed or the link may be incorrect.
          </p>

          <div className="flex justify-center md:justify-end gap-4 mt-6">
            <a
              href="/"
              className="bg-[#0c448d] text-white px-4 py-2 rounded-md font-semibold hover:bg-blue-700 transition"
            >
              Home
            </a>

            <a
              href="/courses"
              className="border border-[#0c448d] font-semibold text-[#0c448d] px-4 py-2 rounded-md hover:bg-[#0c448d] hover:text-white transition"
            >
              Browse Courses
            </a>
          </div>
        </div>

      </div>
    </section>

  );
};

export default NotFound;
