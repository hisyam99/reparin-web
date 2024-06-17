import { Skeleton } from "@/components/ui/skeleton";

export function SkeletonDemo() {
  return (
    <div className="container grid grid-cols-3 gap-4">
      <div>
        <Skeleton className="h-64 w-full rounded-lg" />
        <Skeleton className="h-4 w-3/4 mt-4" />
        <Skeleton className="h-4 w-1/2 mt-2" />
      </div>
      <div>
        <Skeleton className="h-96 w-full rounded-lg" />
        <Skeleton className="h-4 w-2/3 mt-4" />
        <Skeleton className="h-4 w-1/2 mt-2" />
      </div>
      <div>
        <Skeleton className="h-64 w-full rounded-lg" />
        <Skeleton className="h-4 w-3/4 mt-4" />
        <Skeleton className="h-4 w-1/2 mt-2" />
      </div>
    </div>
  );
}
