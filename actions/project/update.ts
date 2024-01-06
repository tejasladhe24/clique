"use server"

import { ActionState, createSafeAction } from "@/lib/create-safe-action";
import { db } from "@/lib/db";
import { auth } from "@clerk/nextjs";
import { Project } from "@prisma/client";
import z from "zod";

const schema = z.object({
  title: z.string({
    required_error: "Project title is required",
    invalid_type_error: "Project title is required",
  }),
  id: z.string({
    required_error: "Project ID is required",
    invalid_type_error: "Project ID is required",
  }),
});

type InputType = z.infer<typeof schema>;
type ReturnType = ActionState<InputType, Project>;

const handler = async (values: InputType): Promise<ReturnType> => {
  const { userId, orgId } = auth();

  if (!userId || !orgId) {
    return {
      error: "Unauthorized",
    };
  }

  const { id: projectId, title } = values;

  let project;

  try {
    project = await db.project.update({
      where: {
        id: projectId,
        orgId,
      },
      data: {
        title,
      },
    });

    if (!project) {
      return {
        error: "Failed to update",
      };
    }
  
} catch (err) {
    console.log(err);
    return { error: "Failed to update" };
  }
  return { data: project };
};

export const updateProject = createSafeAction(schema, handler);
