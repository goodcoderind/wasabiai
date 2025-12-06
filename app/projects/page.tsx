import ProjectsHero from '@/components/projects/ProjectsHero'
import ProjectsGrid from '@/components/projects/ProjectsGrid'
import FeaturedProjects from '@/components/projects/FeaturedProjects'

export default function ProjectsPage() {
  return (
    <div className="min-h-screen">
      <ProjectsHero />
      <ProjectsGrid />
      <FeaturedProjects />
    </div>
  )
}
