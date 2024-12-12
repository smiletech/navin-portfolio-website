"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "LMS-Khebra",
    description: "Developed a scalable Learning Management System (LMS) with React.js, Node.js, and MongoDB, featuring secure authentication, real-time updates, course management, user enrollment, and progress tracking for enhanced learning experiences.",
    image: "/images/projects/lms_khebra.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "https://dev-web.khebra.ae/",
  },
  {
    id: 2,
    title: "Appliport - Smart Logistics",
    description: "Order management, route optimization, and tracking are all features of appliport. Order placing is the first step, followed by order processing and an application for inventory management",
    image: "/images/projects/appliport.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "https://dev.appliport.com/",
  },
  {
    id: 3,
    title: "JumpPoint Logistics",
    description: "JumpPoint Logistics likely handles the transportation of goods and cargo. They may offer various modes of transportation, including air freight, ocean freight, road freight,and rail freight. This allows them to provide domestic and international shipping services based on the requirements of their clients",
    image: "/images/projects/jumpoint.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "https://www.jumppoint.io/",
  },
  {
    id: 4,
    title: "Your Place",
    description: "YourPlace App streamlines rental property management with features like rent payments, maintenance requests, communication tools, document management, and reminders, offering tenants a seamless, efficient, and user-friendly experience for hassle-free interactions.",
    image: "/images/projects/yourplace.jpeg",
    tag: ["All", "Mobile"],
    gitUrl: "/",
    previewUrl: "https://tenant.yourplace.ae/",
  },
  {
    id: 5,
    title: "Drive Any Car",
    description: "Drive Any Car is a seamless platform for buying and selling second-owner vehicles. It offers secure listings, transparent pricing, and an easy-to-use interface, connecting buyers and sellers effortlessly for trusted car transactions.",
    image: "/images/projects/dac.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "https://dev.web.driveanycars.com/",
  },
  {
    id: 6,
    title: "Seenjeem",
    description: "Experience Kuwaiti culture with our interactive quiz game! Enjoy 36 questions across six categories, weekly updates, free trials, and team challenges with fun tools and a dynamic point system.",
    image: "/images/projects/seenjeem.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "https://seenjeemkw.com/",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Mobile"
          isSelected={tag === "Mobile"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
