import { Project } from "@prisma/client";

import { ProjectTitleForm } from "./project-title-form";
import { ProjectOptions } from "./project-options";

interface ProjectNavbarProps {
  project: Project;
}

export const ProjectNavbar = async ({ project }: ProjectNavbarProps) => {
  return (
    <div className="w-full h-14 z-[40] bg-indigo-600 fixed top-14 flex items-center px-6 gap-x-4 text-white">
      <ProjectTitleForm project={project} />
      <div className="ml-auto">
        <ProjectOptions id={project.id} />
      </div>
    </div>
  );
};
