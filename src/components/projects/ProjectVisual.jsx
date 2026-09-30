import ProjectCover from './ProjectCover'

/* Capture d'écran du projet, ou sa couverture dessinée s'il n'en a pas. */
export default function ProjectVisual({ project, alt = '', className = '', loading = 'lazy' }) {
  if (!project.image) return <ProjectCover variant={project.cover} className={className} />
  return <img className={className} src={project.image} alt={alt} loading={loading} decoding="async" />
}
