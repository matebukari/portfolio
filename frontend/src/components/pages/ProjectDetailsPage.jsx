import { useNavigate, useParams } from "react-router-dom";
import projects from "../../data/projects.json";
import ProjectHeader from "./projectDetails/ProjectHeader";
import ProjectTitle from "./projectDetails/ProjectTitle";
import ProjectDescription from "./projectDetails/ProjectDescription";
import ProjectStats from "./projectDetails/ProjectStats";
import ProjectLinks from "./projectDetails/ProjectLinks";
import ProjectTechnologies from "./projectDetails/ProjectTechnologies";
import ProjectScreenshot from "./projectDetails/ProjectScreenshot";
import ProjectFeatures from "./projectDetails/projectFeatures";

const ProjectDetailsPage = () => {
  const navigate = useNavigate();
  const { slug } = useParams();

  const project = projects.find((p) => p.slug === slug);

  return (
    <div className="min-h-screen p-6">
      {/* Header */}
      <ProjectHeader title={project.title} onBack={() => navigate(-1)}/>

      <div className="mx-auto max-w-7xl grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left Side */}
        <div className="space-y-14">

          {/* Project title */}
          <ProjectTitle title={project.title}/>

          {/* Project description */}
          <ProjectDescription text={project.detailsDescription}/>

          {/* Stat cards */}
          <ProjectStats 
            technologiesCount={project.technologies?.length ?? 0} 
            featuresCount={project.features?.length ?? 0}
          />

          {/* Live Demo & Github link */}
          <ProjectLinks demoLink={project.demoLink} githubLink={project.githubLink}/>

          {/* Technologies */}
          <ProjectTechnologies technologies={project.technologies ?? []}/>
        </div>

        {/* Right Side */}
        <div className="space-y-14 flex flex-col">
          {/* Project screenshot */}
          <ProjectScreenshot title={project.title} screenshot={project.screenshot}/>

          {/* Features list */}
          <ProjectFeatures features={project.features ?? []}/>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetailsPage;
