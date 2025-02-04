'use client';
import { FormProvider, useForm } from 'react-hook-form';

import Pagination from '@/shared/components/ui/pagination';
import SearchInput from '@/shared/components/ui/search-input';
import { TableDataSkeleton } from '@/shared/components/ui/table-data-skeleton';
import { PAGINATION_PER_PAGE } from '@/shared/constants/commons';
import { usePagination } from '@/shared/hooks';
import { useProducts } from '../hooks';
import ProductContent from './product-content';
import ProductTable from './product-table';

const Products = () => {
  const { page, handlePageChange } = usePagination();
  const methods = useForm();

  const { data: products, isLoading } = useProducts(
    { page: page + 1, per_page: PAGINATION_PER_PAGE },
  );

  return (
    <div>
      <div className="mb-4">
        <FormProvider {...methods}>
          <SearchInput />
        </FormProvider>
      </div>

      <ProductTable>
        {isLoading ? <TableDataSkeleton columns={4} /> : <ProductContent data={products} />}
      </ProductTable>

      <Pagination
        currentPage={page}
        setCurrentPage={handlePageChange}
        totalPages={products ? Math.ceil(products?.length / PAGINATION_PER_PAGE) : 0} // if xano u can use pageTotal here directly
      />
    </div>
  );
};

export default Products;
