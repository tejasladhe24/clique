import { UserButton } from "@clerk/nextjs";
import React from "react";

const PlatformLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <div className="fixed bg-slate-800/20 z-10 backdrop-blur top-0 left-0 w-full p-4 flex flex-row-reverse items-center gap-x-4">
        <UserButton />
      </div>
      <main className="pt-16">{children}</main>
    </>
  );
};

export default PlatformLayout;
