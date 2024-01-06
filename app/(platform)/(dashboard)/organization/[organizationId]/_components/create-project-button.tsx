"use client"

import { createProject } from "@/actions/project/create";
import { ActionButton } from "@/components/action-button";
import { Plus } from "lucide-react";
import { toast } from "sonner";

export const CreateProjectButton = () => {
  return (
    <ActionButton
      onClick={async () => {
        const action = await createProject();
        if (action.error) {
          toast.error(action.error);
          console.log(action.error);
          return;
        }

        const project = action.data;
        toast.success(`Project ${project?.title} created`);
      }}
    >
      <span className="hidden md:block lg:block">Create</span>
      <Plus className="w-4 h-4 md:hidden lg:hidden" />
    </ActionButton>
  );
};
