import { SignedIn, UserButton } from "@clerk/nextjs";

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <SignedIn>
        <div className="fixed bg-slate-800/20 z-10 backdrop-blur top-0 left-0 w-full p-4 flex flex-row-reverse items-center gap-x-4">
          <UserButton />
        </div>
      </SignedIn>
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
        {children}
      </div>
    </>
  );
};

export default AuthLayout;
