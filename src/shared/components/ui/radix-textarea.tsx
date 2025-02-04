import * as React from 'react';

import { cn } from '@/shared/utils/commons';

export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

const RadixTextArea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, ...props }, ref) => {
    return (
      <textarea
        className={cn(
          'ring-offset-background focus-visible:ring-ring flex min-h-[80px] w-full rounded-lg border border-border bg-transparent px-3 py-2 text-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50',
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
RadixTextArea.displayName = 'RadixTextArea';

export { RadixTextArea };
