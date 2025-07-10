
import { Skeleton } from "@/components/ui/skeleton";

export function ProductCardSkeleton() {
  return (
    <div className="w-full group">
      <div className="relative aspect-[3/4] w-full overflow-hidden rounded-2xl bg-secondary">
        <Skeleton className="h-full w-full" />
      </div>
      <div className="pt-3 space-y-2">
        <Skeleton className="h-4 w-3/4" />
        <Skeleton className="h-4 w-1/2" />
      </div>
    </div>
  );
}
