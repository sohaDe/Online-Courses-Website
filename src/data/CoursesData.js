import course1 from '../assets/images/course1.png'
import course2 from '../assets/images/course2.png'
import course3 from '../assets/images/course3.png'
import course4 from '../assets/images/course4.png'
import course5 from '../assets/images/course5.png'
import course6 from '../assets/images/course6.png'


export const courses = [
  {
    id: 1,
    title: "React Basics",
    shortDescription: "Learn the fundamentals of React from scratch.",
    fullDescription: "Start your React journey by learning JSX, components, props, state, and hooks. Build interactive UIs and understand the React lifecycle to create dynamic web applications.",
    lessonsCount: 25,
    level: "Beginner",
    price: 49,
    image: course1,
    category: "Frontend",
    duration: "4 Weeks",
    days: ["Sun", "Tue"],
    time: "18:00 - 20:00",
    instructor: "John Doe",
    language: "English",
    topics: ["React", "JSX", "Components", "Props & State", "useState & useEffect"]
  },
  {
    id: 2,
    title: "Advanced JavaScript",
    shortDescription: "Deep dive into modern JavaScript concepts.",
    fullDescription: "Master advanced JavaScript topics like closures, async/await, ES6+ features, and advanced DOM manipulation. Enhance your coding skills to tackle complex web development challenges.",
    lessonsCount: 40,
    level: "Advanced",
    price: 79,
    image: course3,
    category: "Frontend",
    duration: "6 Weeks",
    days: ["Mon", "Wed"],
    time: "19:00 - 21:00",
    instructor: "Jane Smith",
    language: "English",
    topics: ["ES6+", "Closures", "Async/Await", "Modules", "Advanced DOM"]
  },
  {
    id: 3,
    title: "UI/UX Design Fundamentals",
    shortDescription: "Learn the principles of modern UI/UX design.",
    fullDescription: "Explore design thinking, wireframing, prototyping, and user testing. Learn how to create visually appealing and user-friendly interfaces that enhance user experience.",
    lessonsCount: 30,
    level: "Beginner",
    price: 59,
    image: course2,
    category: "UI/UX",
    duration: "5 Weeks",
    days: ["Tue", "Thu"],
    time: "17:00 - 19:00",
    instructor: "Emily Clark",
    language: "English",
    topics: ["Design Thinking", "Wireframing", "Prototyping", "User Testing", "UI Patterns"]
  },
  {
    id: 4,
    title: "Backend with Node.js",
    shortDescription: "Build scalable backend applications using Node.js.",
    fullDescription: "Learn Express.js, REST APIs, authentication, and database integration. Build robust backend services to power your web applications efficiently.",
    lessonsCount: 35,
    level: "Intermediate",
    price: 69,
    image: course4,
    category: "Backend",
    duration: "5 Weeks",
    days: ["Wed", "Fri"],
    time: "18:00 - 20:00",
    instructor: "Michael Brown",
    language: "English",
    topics: ["Node.js", "Express.js", "REST API", "JWT Authentication", "MongoDB"]
  },
  {
    id: 5,
    title: "Fullstack React & Node.js",
    shortDescription: "Combine frontend and backend to build fullstack apps.",
    fullDescription: "Create fullstack projects using React for frontend and Node.js for backend. Learn to connect frontend interfaces with backend services and databases seamlessly.",
    lessonsCount: 45,
    level: "Advanced",
    price: 99,
    image: course5,
    category: "Fullstack",
    duration: "8 Weeks",
    days: ["Mon", "Thu"],
    time: "18:00 - 21:00",
    instructor: "Sarah Johnson",
    language: "English",
    topics: ["React", "Node.js", "REST API", "MongoDB", "Fullstack Project"]
  },
  {
    id: 6,
    title: "SEO & Digital Marketing",
    shortDescription: "Learn to optimize websites and promote them online.",
    fullDescription: "Master SEO techniques, Google Analytics, social media marketing, and email campaigns to increase website visibility and drive traffic effectively.",
    lessonsCount: 28,
    level: "Beginner",
    price: 49,
    image: course6,
    category: "Marketing",
    duration: "4 Weeks",
    days: ["Tue", "Thu"],
    time: "16:00 - 18:00",
    instructor: "Laura White",
    language: "English",
    topics: ["SEO Basics", "Analytics", "Content Marketing", "Social Media", "Email Campaigns"]
  },
  {
    id: 7,
    title: "React Advanced Patterns",
    shortDescription: "Master advanced React patterns and performance optimization.",
    fullDescription: "Learn Context API, custom hooks, render props, and performance optimization techniques. Build scalable React apps following best practices for maintainable code.",
    lessonsCount: 30,
    level: "Advanced",
    price: 89,
    image: course1,
    category: "Frontend",
    duration: "5 Weeks",
    days: ["Sat", "Sun"],
    time: "18:00 - 20:00",
    instructor: "John Doe",
    language: "English",
    topics: ["Context API", "Custom Hooks", "Render Props", "Memoization", "Performance Optimization"]
  }
];