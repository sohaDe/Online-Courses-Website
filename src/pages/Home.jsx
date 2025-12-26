import hero1 from '../assets/images/hero-1.jpg'
import hero2 from '../assets/images/hero-2.jpg'
import hero3 from '../assets/images/hero-3.jpg'
import about from '../assets/images/about.png'
import shape from '../assets/images/shape.svg'


import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay, Navigation } from 'swiper/modules';
import { reviews } from '../data/HomeReviewsData.js';


import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import SectionHeader from '../components/SectionHeader'
import Button from '../components/Button'
import { useNavigate } from 'react-router-dom'




const Home = () => {
  const navigate = useNavigate();



  return (
    <>
      <section className="bg-white pt-40 pb-20">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">

            <div>
              <SectionHeader
                title="Learn New Skills Anytime, Anywhere"
                subtitle={<span>
                  <span className="text-[#0c448d] text-3xl md:text-4xl font-extrabold">Skill</span>
                  <span className="text-[#f05f18] text-3xl md:text-4xl font-extrabold">Rise</span> helps you learn the most in-demand skills from expert instructors through high-quality, easy-to-follow online courses
                </span>
                }
                align="left"
              />

              <div className="flex gap-4">
                <Button onClick={() => navigate("/courses")} variant="cta" size="lg">
                  Browse Courses
                </Button>

              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <img
                src={hero3}
                alt="online learning"
                className="rounded-lg object-cover h-56 w-full"
              />

              <img
                src={hero2}
                alt="students learning"
                className="rounded-lg object-cover h-56 w-full"
              />

              <img
                src={hero1}
                alt="coding course"
                className="rounded-lg object-cover h-56 w-full col-span-2"
              />
            </div>

          </div>
        </div>
      </section>



      <section className="bg-gray-50 py-20">

        <div className="max-w-7xl mx-auto px-8  py-20 grid md:grid-cols-2 gap-12 items-center ">

          <div>
            <img
              src={about}
              alt="Online learning"
              className="rounded-xl shadow-md"
            />
          </div>

          <div>

            <SectionHeader
              title="About SkillRise"
              subtitle={
                <span>
                  <span className="text-[#0c448d] text-3xl md:text-4xl font-extrabold">Skill</span>
                  <span className="text-[#f05f18] text-3xl md:text-4xl font-extrabold">Rise</span> is a modern learning platform designed to help learners build real-world skills through structured, high-quality online courses. Whether you’re starting your journey or advancing your career, we’re here to support your growth"</span>}

              align="left"
            />


            <ul className="space-y-3">
              <li className="flex items-center text-gray-700">
                <span className="text-[#0c448d] mr-3">✔</span>
                Carefully curated courses for all skill levels
              </li>
              <li className="flex items-center text-gray-700">
                <span className="text-[#0c448d] mr-3">✔</span>
                Flexible learning anytime, anywhere
              </li>
              <li className="flex items-center text-gray-700">
                <span className="text-[#0c448d] mr-3">✔</span>
                Practical knowledge you can apply immediately
              </li>
            </ul>
          </div>

        </div>


      </section>


      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-8">

          <SectionHeader
            label="Why Choose Us"
            title="Invest in Your Future"
            subtitle="We provide a modern learning experience designed to help you master real-world skills and achieve your professional goals"
            align="center"
          />

          <div className="-mx-4 flex flex-wrap justify-center">
            {[
              {
                title: "Updated Content",
                text: "Courses designed with the latest industry standards to keep you ahead.",
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                ),
              },
              {
                title: "Verified Certificates",
                text: "Earn a certificate of completion for every course to boost your resume.",
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                  </svg>
                ),
              },
              {
                title: "Flexible Learning",
                text: "Learn anytime, anywhere on any device with lifetime access.",
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
                ),
              },
              {
                title: "Expert Support",
                text: "Get direct feedback from instructors to ensure your success.",
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                ),
              },
            ].map((feature, i) => (
              <div key={i} className="w-full px-4 md:w-1/2 xl:w-1/4">
                <div className="relative mx-auto mb-10 max-w-[370px] text-center">
                  {i !== 3 && (
                    <div className="absolute top-12 -right-4 hidden h-1 w-16 border-t-2 border-dashed border-blue-200 xl:block 2xl:w-[75px]"></div>
                  )}
                  <div className="mx-auto mb-8 flex h-[100px] w-[100px] items-center justify-center rounded-2xl bg-[#0c448d] text-white shadow-lg">
                    {feature.icon}
                  </div>
                  <h3 className="mb-4 text-xl font-bold text-gray-800">{feature.title}</h3>
                  <p className="text-base leading-relaxed text-gray-600">{feature.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      <section className="bg-gray-50 py-20 ">
        <div className="max-w-7xl mx-auto px-8">

          <SectionHeader
            label="Student Reviews"
            title="Success Stories from Our Students"
            subtitle="Hear from our community about their journey and how our courses transformed their careers"
            align="center"
          />
          <Swiper
            modules={[Pagination, Autoplay, Navigation]}
            spaceBetween={30}
            slidesPerView={1}
            loop={true}
            autoplay={{ delay: 4000, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="pb-16"
          >
            {reviews.map((review) => (
              <SwiperSlide key={review.id}>
                <div className="bg-white p-10 rounded-3xl shadow-sm border w-full border-gray-100 h-80 flex flex-col justify-between">
                  <div>
                    <div className="text-[#0c448d] mb-6">
                      <svg width="35" height="35" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H15.017C14.4647 8 14.017 8.44772 14.017 9V12M3.017 21L3.017 18C3.017 16.8954 3.91243 16 5.017 16H8.017C8.56928 16 9.017 15.5523 9.017 15V9C9.017 8.44772 8.56928 8 8.017 8H4.017C3.46472 8 3.017 8.44772 3.017 9V12" />
                      </svg>
                    </div>
                    <p className="text-gray-600 leading-relaxed mb-8 italic">
                      "{review.text}"
                    </p>
                  </div>

                  <div className="flex items-center mt-auto">
                    <img
                      src={review.image}
                      alt={review.name}
                      className="w-14 h-14 rounded-full border-2 border-blue-100 mr-4"
                    />
                    <div>
                      <h4 className="font-bold text-gray-900">{review.name}</h4>
                      <p className="text-sm text-[#0c448d]">{review.role}</p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

        </div>
      </section>


      <section className="relative overflow-hidden bg-[#0c448d] py-20 ">
        <img
          className="absolute top-0 right-0 z-0 opacity-20"
          src={shape}
          alt="Background Shape"
        />

        <div className="max-w-7xl mx-auto px-8 md:px-12 relative z-10">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-10">

            <div className="lg:w-2/3 text-white">
              <h2 className="text-3xl md:text-4xl font-extrabold mb-4 leading-tight">
                Upgrade Your Skills Faster
              </h2>

              <h6 className="text-lg font-semibold text-[#f05f18] mb-4">
                Full-Stack Web Development Track
              </h6>

              <p className="text-blue-100 text-lg max-w-xl leading-relaxed">
                Learn by building real projects with expert guidance —
                trusted by <span className="font-semibold text-white">5,000+ learners</span>.
              </p>


            </div>

            <div>

              <Button variant="cta" size="lg">
                Enroll Now
              </Button>
            </div>

          </div>
        </div>
      </section>

    </>
  )
}

export default Home
