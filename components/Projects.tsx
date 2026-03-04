import { ArrowUpRight } from "lucide-react";
import Image from "next/image";

const projects = [
  {
    title: "Food Catering Website",
    description:
      "A minimalistic food catering website that connects the admin and user seamlessly with in web CMS and customer handling whatsapp and email system.",
    technologies: ["Next.js", "Tailwind CSS", "TypeScript"],
    link: "https://caterlux.vercel.app/",
    image: "/web-1.png",
  },
  {
    title: "Task Management Website w/ PWA",
    description:
      "An AI assisted Task Management website with JWT authentication and AI Chat Section that makes you get the job done.",
    technologies: ["Android", "FastAPI", "Python","Next.js","Typescript"],
    link: "https://taskflow-app-frontend.vercel.app/",
    image: "/web-2.png",
  },
  {
    title: "Blog Website With Headless CMS",
    description:
      "Blog Website built with sanity Studio for dynamic content handling up along with Supabase Backend.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Sanity's Headless CMS"],
    link: "https://dev-blog-blue-zeta.vercel.app/",
    image: "/web-3.png",
  },
];

export default function Projects() {
  return (
    <section className="py-24 sm:py-32 px-6 lg:px-8 bg-muted/30 scroll-mt-16" id="projects">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-center">
          Projects
        </h2>
        <p className="mt-4 text-muted-foreground text-center max-w-xl mx-auto">
          Selected works showcasing end-to-end development
        </p>
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
          {projects.map((project) => (
            <a
              key={project.title}
              href={project.link}
              className="group flex flex-col rounded-2xl border border-border/50 hover:border-border bg-background hover:shadow-sm transition-all duration-200 overflow-hidden"
            >
              {/* Image Container */}
              <div className="relative h-48 overflow-hidden bg-muted">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-200" />
              </div>

              {/* Card Content */}
              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-lg font-semibold mb-3 group-hover:text-foreground/80 transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed flex-1">
                  {project.description}
                </p>
                <div className="mt-6 space-y-4">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 text-xs font-medium bg-muted text-foreground/80 rounded-md"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                    <span>View Project</span>
                    <ArrowUpRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
