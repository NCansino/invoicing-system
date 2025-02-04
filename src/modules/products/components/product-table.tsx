import { Table, TableBody, TableHead, TableHeader, TableRow } from '@/shared/components/ui/table';
import { type TChildren } from '@/shared/types/commons';

type ProductTableProps = TChildren ;

const ProductTable = ({ children }: ProductTableProps) => {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Name</TableHead>
          <TableHead>Price</TableHead>
          <TableHead>Description</TableHead>
          <TableHead>
            <span className="sr-only">Actions</span>
          </TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>{children}</TableBody>
    </Table>
  );
};

export default ProductTable;
