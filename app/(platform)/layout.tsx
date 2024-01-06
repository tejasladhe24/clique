import React from "react";

const PlatformLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <main className="pt-16 h-full">{children}</main>
    </>
  );
};

export default PlatformLayout;
