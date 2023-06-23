import { Card, CardContent } from "./ui/card";
import { Skeleton } from "./ui/skeleton";

type CardSkeletonProps = {
  entries?: number;
};

const CardSkeleton = ({ entries = 3 }: CardSkeletonProps) => {
  return (
    <Card className="h-full w-full p-4">
      <CardContent>
        {Array.from({ length: entries }).map((_, i) => {
          return (
            <Card className="my-4 space-y-4" key={i}>
              <CardContent className="space-y-4">
                <div className="flex flex-row justify-between">
                  <Skeleton className="h-4 w-32" />

                  <Skeleton className="h-4 w-16" />
                </div>

                <Skeleton className="h-4 w-16" />
              </CardContent>
            </Card>
          );
        })}
      </CardContent>
    </Card>
  );
};

export default CardSkeleton;
