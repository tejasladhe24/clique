"use client";

import { Button } from "@/components/ui/button";
import { MouseEventHandler } from "react";

export const ActionButton = ({
  children,
  onClick,
}: {
  children: React.ReactNode;
  onClick: MouseEventHandler<HTMLButtonElement>;
}) => {
  return (
    <Button variant={"outline"} onClick={onClick}>
      {children}
    </Button>
  );
};
