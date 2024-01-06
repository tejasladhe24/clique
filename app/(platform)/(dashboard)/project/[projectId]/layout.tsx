import { auth } from "@clerk/nextjs";
import { notFound, redirect } from "next/navigation";

import { db } from "@/lib/db";

import { ProjectNavbar } from "./_components/project-navbar";

export async function generateMetadata({
  params,
}: {
  params: { projectId: string };
}) {
  const { orgId } = auth();

  if (!orgId) {
    return {
      title: "Project",
    };
  }

  const project = await db.project.findUnique({
    where: {
      id: params.projectId,
      orgId,
    },
  });

  return {
    title: project?.title || "Project",
  };
}

const ProjectIdLayout = async ({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { projectId: string };
}) => {
  const { orgId } = auth();

  if (!orgId) {
    redirect("/select-org");
  }

  const project = await db.project.findUnique({
    where: {
      id: params.projectId,
      orgId,
    },
  });

  if (!project) {
    notFound();
  }

  return (
    <div className="relative h-full bg-no-repeat bg-cover bg-center">
      <ProjectNavbar project={project} />
      <div className="absolute inset-0 bg-sky-800/10" />
      <main id="canvas-container" className="relative h-full">{children}</main>
    </div>
  );
};

export default ProjectIdLayout;
