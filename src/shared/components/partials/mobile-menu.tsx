import { X } from 'lucide-react';

import { Sheet, SheetClose, SheetContent, SheetHeader } from '@/shared/components/ui/sheet';
import SidebarLinks from './sidebar-links';

type Props = {
  onChange: (arg: boolean) => void;
  open: boolean;
};

const MobileMenu = ({ open, onChange }: Props) => {
  return (
    <Sheet open={open} onOpenChange={onChange} defaultOpen={false}>
      <SheetContent side="left" className="w-[18rem] space-y-10 bg-sidebar">
        <SheetHeader>
          <div className="flex items-center justify-between">
            <div className="px-2 text-white">Add logo here</div>
            <SheetClose>
              <X className="h-5 w-5 text-white" />
            </SheetClose>
          </div>
        </SheetHeader>

        <SidebarLinks />
      </SheetContent>
    </Sheet>
  );
};

export default MobileMenu;
