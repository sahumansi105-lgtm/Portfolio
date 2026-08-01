import eventora from "../assets/images/eventora.png";
import hotel from "../assets/images/hotel.png";
import restaurant from "../assets/images/restaurant.png";
import food from "../assets/images/food.png";
import sports from "../assets/images/sports.png";

const projects = [
  {
    id: 1,
    title: "Eventora",
    subtitle: "Full Stack Event Management System",
    description:
      "A complete event management application with JWT authentication, role-based access, Razorpay payment integration, REST APIs, and CRUD operations.",
    image: eventora,   // ✅
    tech: ["React", "Spring Boot", "MySQL", "JWT", "REST API", "Razorpay"],
    github: "https://github.com/sahumansi105-lgtm/Eventora",
    live: "https://eventora-frontend-iota-eight.vercel.app",
  },

  {
    id: 2,
    title: "Paradise Hotel",
    subtitle: "Responsive Hotel Website",
    description:
      "Modern hotel booking website with room listings, reusable React components, responsive UI, and elegant design.",
    image: hotel,   // ✅
    tech: ["React", "Bootstrap", "CSS", "JavaScript"],
    github: "https://github.com/sahumansi105-lgtm/Project-HOTEL",
    live: "https://final-project-hotel.vercel.app",
  },

  {
    id: 3,
    title: "Restaurant Website",
    subtitle: "Responsive Restaurant Website",
    description:
      "Restaurant website featuring Home, Menu, About and Contact pages with responsive Bootstrap design.",
    image: restaurant,   // ✅
    tech: ["HTML", "CSS", "Bootstrap", "JavaScript"],
    github: "https://github.com/sahumansi105-lgtm",
    live: "https://flavor-fusion-bistro.vercel.app",
  },

  {
    id: 4,
    title: "Food Ordering",
    subtitle: "Java Console Project",
    description:
      "Console-based food ordering system developed using Core Java, JDBC and MySQL.",
    image: food,   // ✅
    tech: ["Core Java", "JDBC", "MySQL"],
    github: "https://github.com/sahumansi105-lgtm",
    live: "",
  },

  {
    id: 5,
    title: "Sports Store",
    subtitle: "Database Management System",
    description:
      "MySQL-based Sports Store Management System using SQL queries, joins, views and stored procedures.",
    image: sports,   // ✅
    tech: ["MySQL", "SQL"],
    github: "https://github.com/sahumansi105-lgtm",
    live: "",
  },
];

export default projects;