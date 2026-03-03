import { Globe, Server, Smartphone } from "lucide-react";

const expertiseAreas = [
  {
    icon: Globe,
    title: "Frontend Web",
    description: "Modern, responsive interfaces",
    technologies: ["Next.js", "Tailwind CSS", "TypeScript"],
  },
  {
    icon: Server,
    title: "Backend Systems",
    description: "Scalable API architecture",
    technologies: ["FastAPI", "Python", "PostgreSQL"],
  },
  {
    icon: Smartphone,
    title: "Mobile Apps",
    description: "Native Android experiences",
    technologies: ["React Native", "Android Development"],
  },
];

export default function Expertise() {
  return (
    <section className="py-24 sm:py-32 px-6 lg:px-8 scroll-mt-16" id="expertise">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-center">
          Expertise
        </h2>
        <p className="mt-4 text-muted-foreground text-center max-w-xl mx-auto">
          Specialized skills across the full development stack
        </p>
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-12">
          {expertiseAreas.map((area, index) => (
            <div
              key={area.title}
              className="group p-6 rounded-2xl border border-border/50 hover:border-border transition-colors duration-200"
            >
              <div className="w-12 h-12 rounded-full bg-muted flex items-center justify-center mb-6">
                <area.icon className="w-6 h-6 text-foreground" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{area.title}</h3>
              <p className="text-muted-foreground text-sm mb-6">
                {area.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {area.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 text-xs font-medium bg-muted text-foreground rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
