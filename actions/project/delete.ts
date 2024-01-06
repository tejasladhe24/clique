"use server"

import { ActionState, createSafeAction } from "@/lib/create-safe-action";
import { db } from "@/lib/db";
import { auth } from "@clerk/nextjs";
import { Project } from "@prisma/client";
import z from "zod";

const schema = z.object({
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

  const { id: projectId } = values;

  let project;

  try {
    project = await db.project.delete({
      where: {
        id: projectId,
        orgId,
      },
    });
  } catch (err) {
    console.log(err);
    return { error: "Failed to delete" };
  }
  return { data: project };
};

export const deleteProject = createSafeAction(schema, handler);
