import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";

const IndexPage = () => {
  return (
    <main className="h-screen flex items-center justify-center bg-gradient-to-b from-gray-900 via-purple-900 to-violet-600">
      <div className="min-w-[400px] max-w-[600px] py-20 flex flex-col items-center backdrop-blur rounded-lg justify-center space-y-4 dark:text-offgray text-offblack">
        <h1 className="font-semibold text-indigo-400 text-8xl">Clique</h1>
        <p className="opacity-80">Stay connected with your team.</p>
        <Separator />
        <div className="flex items-center space-x-4">
          <Link href={"#"}>
            <Button variant={"outline"}>Download for PC</Button>
          </Link>
          <Link href={"/dashboard"}>
            <Button>Open in Browser</Button>
          </Link>
        </div>
      </div>
    </main>
  );
};

export default IndexPage;
