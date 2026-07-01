import { useState } from "react";
import { motion } from "framer-motion";
import { ExternalLink, Github, Layers } from "lucide-react";

interface Project {
  title: string;
  description: string;
  tags: string[];
  link?: string;
  github?: string;
}

const projects: Project[] = [
  {
    title: "A Cross-Lingual Analysis of Bias in Large Language Models Using Romanian History",
    description: "In this case study, we select a set of controversial Romanian historical questions and ask multiple Large Language Models to answer them across languages and contexts, in order to assess their biases. Besides being a study mainly performed for educational purposes, the motivation also lies in the recognition that history is often presented through altered perspectives, primarily influenced by the culture and ideals of a state, even through large language models. Since they are often trained on certain data sets that may present certain ambiguities, the lack of neutrality is subsequently instilled in users. The research process was carried out in three stages, to confirm the idea that the type of response expected can influence, to a certain extent, the response itself; after providing an affirmative answer to some given question, an LLM could shift its way of thinking after being asked the same question again, but being told to respond with a numerical value of a scale. Results show that binary response stability is relatively high but far from perfect and varies by language. Models often flip stance across languages or between formats; numeric ratings frequently diverge from the initial binary choice, and the most consistent models are not always those judged most accurate or neutral. Our research brings to light the predisposition of models to such inconsistencies, within a specific contextualization of the language for the question asked.",
    tags: ["NLP", "History", "Python"],
    link: "https://arxiv.org/abs/2510.02362",
    github: "https://github.com/mateipiratul/llm_casestudy",
  },
  {
    title: "Grapher - Task Management Tool",
    description: "The concept of portraying a project as a tree forest of elements is introduced by Grapher, a traditional team-level project task management program that implements the logical and visual element that permits activities to nest with each other in specific scenarios.",
    tags: ["ASP.NET", "JavaScript", "MermaidJS", "PostgreSQL"],
    github: "https://github.com/mateipiratul/Grapher",
  },
  {
    title: "HLTV-DB",
    description: "Comprehensive Database of proffessional Counter-Strike, similar to HLTV.org, built using PL/SQL and deployed on Oracle Database.",
    tags: ["Database Theory", "PL/SQL"],
    github: "https://github.com/mateipiratul/hltv_db",
  },
  {
    title: "macoq",
    description: "Lightweight C library implementing various synchronization mechanisms (mutexes, semaphores, condition variables) for concurrent programming, using <stdatomic.h> only.",
    tags: ["C", "Concurrency"],
    github: "https://github.com/bogdanmaciuca/macoq",
  },
  {
    title: "coQR",
    description: "Dynamic QR Code Generator from scratch written in vanilla JavaScript: from data encryption to processing and analysis.",
    tags: ["JavaScript", "Parsing", "Data Encryption"],
    github: "https://github.com/mateipiratul/coqr_js",
  },
  {
    title: "CSViewer",
    description: "In progress...",
    tags: ["Java", "Oracle SQL"],
    github: "#",
  },
];

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const ProjectGrid = () => {
  const [expanded, setExpanded] = useState<string | null>(null);

  const toggleExpanded = (title: string) => {
    setExpanded((current) => (current === title ? null : title));
  };

  return (
    <section className="px-6 py-20 max-w-6xl mx-auto">
      <div className="section-divider mb-16" />

      <div className="flex items-center gap-3 mb-10">
        <Layers size={20} className="text-primary" />
        <h2 className="text-2xl font-display font-bold text-foreground">Projects</h2>
      </div>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-50px" }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
      >
        {projects.map((project) => (
          <motion.div
            key={project.title}
            variants={item}
            className="border border-border rounded-lg p-6 bg-card/40 card-hover flex flex-col"
          >
            <h3 className="font-display font-bold text-foreground mb-2">{project.title}</h3>

            {(() => {
              const maxChars = 150;
              const isExpanded = expanded === project.title;
              const shouldTruncate = project.description.length > maxChars;
              const description = isExpanded || !shouldTruncate
                ? project.description
                : `${project.description.slice(0, maxChars).trimEnd()}…`;

              return (
                <>
                  <p className="text-sm text-muted-foreground mb-2 flex-1 text-justify">{description}</p>
                  {shouldTruncate ? (
                    <button
                      type="button"
                      onClick={() => toggleExpanded(project.title)}
                      className="text-sm font-medium text-primary hover:underline self-start"
                    >
                      {isExpanded ? "Show less" : "Read more"}
                    </button>
                  ) : null}
                </>
              );
            })()}

            <div className="flex flex-wrap gap-2 mb-4">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs font-display px-2 py-0.5 rounded bg-primary/10 text-primary border border-primary/20"
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="flex gap-3">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  <Github size={16} />
                </a>
              )}
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  <ExternalLink size={16} />
                </a>
              )}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default ProjectGrid;
