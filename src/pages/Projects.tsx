import { motion } from "framer-motion";
import Layout from "@/components/layout/Layout";
import SectionTitle from "@/components/ui/SectionTitle";
import { ExternalLink, Github, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    id: 1,
    title: "Project 1: Data Analysis",
    description:
      "A comprehensive data analysis project exploring patterns and insights from real-world datasets. This project involved data cleaning, visualization, and statistical analysis using Python.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
    tags: ["Python", "Data Analysis", "Visualization"],
    date: "Fall 2025",
    github: "https://github.com/isa500s/warm-place-project",
  },
  {
    id: 2,
    title: "Hour of Code Project",
    description:
      "An interactive coding challenge completed as part of the Hour of Code initiative. This project demonstrates fundamental programming concepts through engaging exercises.",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600&h=400&fit=crop",
    tags: ["JavaScript", "Interactive", "Learning"],
    date: "Fall 2025",
    github: "https://github.com/isa500s/warm-place-project",
  },
  {
    id: 3,
    title: "Personal Portfolio Website",
    description:
      "This very website! A modern, responsive portfolio built with React and styled with Tailwind CSS. Features smooth animations and a clean design system.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
    tags: ["React", "Tailwind CSS", "Framer Motion"],
    date: "Fall 2025",
    github: "https://github.com/isa500s/warm-place-project",
  },
];

const Projects = () => {
  return (
    <Layout>
      <section className="py-20">
        <div className="container mx-auto px-6">
          <SectionTitle
            title="My Projects"
            subtitle="A collection of projects that showcase my skills and learning journey in technology."
          />

          <div className="space-y-12">
            {projects.map((project, index) => (
              <motion.article
                key={project.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="glass rounded-2xl overflow-hidden"
              >
                <div className="grid md:grid-cols-2 gap-0">
                  {/* Image */}
                  <div className="relative h-64 md:h-auto overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent md:bg-gradient-to-r" />
                  </div>

                  {/* Content */}
                  <div className="p-8 flex flex-col justify-center">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                      <Calendar className="w-4 h-4" />
                      <span>{project.date}</span>
                    </div>

                    <h3 className="text-2xl font-serif font-bold mb-4">
                      {project.title}
                    </h3>

                    <p className="text-muted-foreground mb-6">
                      {project.description}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full font-medium"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Actions */}
                    <div className="flex gap-3">
                      <Button asChild variant="outline" size="sm">
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Github className="w-4 h-4 mr-2" />
                          Code
                        </a>
                      </Button>
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Projects;