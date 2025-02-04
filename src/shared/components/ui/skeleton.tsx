import { cn } from '@/shared/utils/commons';

function Skeleton({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn('animate-pulse rounded-lg bg-muted', className)} {...props} />;
}

export { Skeleton };
