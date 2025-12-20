import { motion } from "framer-motion";
import Layout from "@/components/layout/Layout";
import SectionTitle from "@/components/ui/SectionTitle";
import { GraduationCap, Code, Lightbulb, Target } from "lucide-react";

const skills = [
  "HTML & CSS",
  "JavaScript",
  "Python",
  "Git & GitHub",
  "React",
  "Problem Solving",
];

const experiences = [
  {
    icon: GraduationCap,
    title: "Education",
    description: "Currently pursuing a degree in Information Systems, focusing on technology and business integration.",
  },
  {
    icon: Code,
    title: "Technical Skills",
    description: "Building web applications and learning various programming languages and frameworks.",
  },
  {
    icon: Lightbulb,
    title: "Interests",
    description: "Passionate about AI, web development, and creating solutions that make a difference.",
  },
  {
    icon: Target,
    title: "Goals",
    description: "Aspiring to become a skilled developer and contribute to innovative technology projects.",
  },
];

const About = () => {
  return (
    <Layout>
      <section className="py-20">
        <div className="container mx-auto px-6">
          <SectionTitle
            title="About Me"
            subtitle="Get to know more about my background, skills, and what drives me."
          />

          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Bio */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="glass rounded-2xl p-8">
                <h3 className="text-2xl font-serif font-bold mb-6">My Story</h3>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    Hello! I'm Isa Habibbayli, a dedicated student passionate about technology and its 
                    potential to transform how we live and work. My journey into the 
                    world of programming began with curiosity and has grown into a 
                    genuine passion.
                  </p>
                  <p>
                    Currently, I'm studying Information Systems where I'm learning 
                    about the intersection of technology and business. I enjoy building 
                    projects that solve real problems and continuously expanding my 
                    knowledge in web development.
                  </p>
                  <p>
                    When I'm not coding, you can find me exploring new technologies, 
                    participating in online courses, or working on personal projects 
                    that challenge me to grow as a developer.
                  </p>
                </div>
              </div>

              {/* Skills */}
              <div className="mt-8 glass rounded-2xl p-8">
                <h3 className="text-2xl font-serif font-bold mb-6">Skills</h3>
                <div className="flex flex-wrap gap-3">
                  {skills.map((skill, index) => (
                    <motion.span
                      key={skill}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Experience Cards */}
            <div className="space-y-6">
              {experiences.map((exp, index) => (
                <motion.div
                  key={exp.title}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className="glass rounded-2xl p-6 hover:border-primary/50 transition-colors"
                >
                  <div className="flex gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <exp.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg mb-2">{exp.title}</h4>
                      <p className="text-muted-foreground text-sm">
                        {exp.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;