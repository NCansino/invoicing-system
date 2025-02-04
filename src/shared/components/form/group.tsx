import { cn } from '@/shared/utils/commons';
import { type PropsWithChildren } from 'react';

type Props = PropsWithChildren & {
  className?: string;
};

const Group = (props: Props) => {
  return <div className={cn(props.className)}>{props.children}</div>;
};

export default Group;
