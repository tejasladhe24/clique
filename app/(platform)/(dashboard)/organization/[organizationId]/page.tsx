import { Suspense } from "react";

import { Separator } from "@/components/ui/separator";

import { Info } from "./_components/info";
import { ChannelList } from "./_components/channels-list";

const OrganizationIdPage = async () => {
  return (
    <div className="w-full mb-20">
      <Info />
      <Separator className="my-4" />
      <div className="px-2 md:px-4">
        <Suspense fallback={<ChannelList.Skeleton />}>
          <ChannelList />
        </Suspense>
      </div>
    </div>
  );
};

export default OrganizationIdPage;
