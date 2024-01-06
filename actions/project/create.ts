"use server"

import { db } from "@/lib/db";
import { auth } from "@clerk/nextjs";
import { revalidatePath } from "next/cache";

export const createProject = async () => {
  const { userId, orgId } = auth();

  if (!userId || !orgId) {
    return {
      error: "Unauthorized",
    };
  }
  
  let project;

  var newProjectIndex = 0;

  // find if "untitled" project exists
  try {
    project = await db.project.findMany({
      where: {
        title: {
          contains: "Untitled",
        },
      },
    });

    newProjectIndex = project.length;
  } catch (err) {
    console.log(err);
  }

  // create new "Untitled {index}" project
  try {
    project = await db.project.create({
      data: {
        title: `Untitled${newProjectIndex > 0 ? ` ${newProjectIndex}` : ""}`,
        orgId,
      },
    });

    if (!project) {
      return {
        error: "Failed to create new project",
      };
    }
  } catch (err) {
    console.log(err);
    return {
      error: "Failed to create new project",
    };
  }

  revalidatePath(`/organization/${orgId}`);

  return { data: project };
};
