import { Button, type ButtonProps } from '@/shared/components/ui/button';
import { PlusCircle } from 'lucide-react';
import Link from 'next/link';

type Props = ButtonProps & {
  title: string;
  btnLabel: string;
  navigateTo: string;
  withIcon?: boolean;
};

const PageHeader = ({ title, navigateTo, btnLabel, withIcon = false, ...buttonProps }: Props) => {
  return (
    <div className="flex flex-wrap items-center justify-between">
      <div className="sm:flex-auto">
        <h1 className="page-heading">{title}</h1>
      </div>
      <div className="mt-4 sm:ml-16 sm:mt-0 sm:flex-none">
        <Link href={navigateTo}>
          <Button size="lg" className="px-4 py-3" {...buttonProps}>
            {withIcon && <PlusCircle className="mr-2 h-4 w-4" />}
            {btnLabel}
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default PageHeader;
