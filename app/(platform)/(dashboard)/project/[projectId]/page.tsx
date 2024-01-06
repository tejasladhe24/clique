import { auth } from "@clerk/nextjs";
import { redirect } from "next/navigation";

import Canvas from "@/components/canvas/canvas";

interface ProjectIdPageProps {
  params: {
    projectId: string;
  };
}

const ProjectIdPage = async ({ params }: ProjectIdPageProps) => {
  const { orgId } = auth();

  if (!orgId) {
    redirect("/select-org");
  }

  return <Canvas />;
};

export default ProjectIdPage;
