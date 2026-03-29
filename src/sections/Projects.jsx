import projects from '../data/projects'
import ProjectCard from '../components/ProjectCard'

function Projects() {
  return (
    <section
      id="projetos"
      className="min-h-screen flex items-center justify-center px-6 py-24"
    >
      <div className="w-full max-w-5xl">

        {/* Cabeçalho */}
        <div className="mb-6">
          <p className="text-xs text-terminal-muted">
            <span className="text-accent-light">visitor@portfolio</span>
            <span className="text-terminal-muted">:~$</span>
            <span className="text-terminal-text/60"> ls -la ./projects/</span>
          </p>
          <p className="text-xs text-terminal-muted mt-1">
            <span className="text-accent/40">total {projects.length} projects found</span>
          </p>
        </div>

        {/* Grid */}
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {projects.map((project) => (
            <li key={project.id} className="flex flex-col">
              <ProjectCard
                title={project.title}
                description={project.description}
                techs={project.techs}
                github={project.github}
                demo={project.demo}
                image={project.image}
              />
            </li>
          ))}
        </ul>

      </div>
    </section>
  )
}

export default Projects
