import { ImageIcon } from "lucide-react";
import { Skeleton } from "./ui/skeleton";

const ImageSkeleton = () => {
  return (
    <Skeleton className="h-full w-full">
      <div className="h-[480px] w-[640px]">
        <ImageIcon className="h-full w-full" />
      </div>
    </Skeleton>
  );
};

export default ImageSkeleton;
