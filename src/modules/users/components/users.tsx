'use client';

import { FormProvider, useForm } from 'react-hook-form';

import Pagination from '@/shared/components/ui/pagination';
import SearchInput from '@/shared/components/ui/search-input';
import { TableDataSkeleton } from '@/shared/components/ui/table-data-skeleton';
import { PAGINATION_PER_PAGE } from '@/shared/constants/commons';
import { usePagination } from '@/shared/hooks';
import { useUsers } from '../hooks';
import UsersContent from './users-content';
import UsersTable from './users-table';

const Users = () => {
  const { page, handlePageChange } = usePagination();
  const methods = useForm();

  const { data: users, isLoading } = useUsers(
    { page: page + 1, per_page: PAGINATION_PER_PAGE },
  );

  return (
    <div>
      <div className="mb-4">
        <FormProvider {...methods}>
          <SearchInput />
        </FormProvider>
      </div>

      <UsersTable>
        {isLoading ? <TableDataSkeleton columns={4} /> : <UsersContent data={users} />}
      </UsersTable>

      <Pagination
        currentPage={page}
        setCurrentPage={handlePageChange}
        totalPages={Math.ceil(60 / PAGINATION_PER_PAGE)} // 60 is hardcoded, you change it with pageTotal field in your API RESPONSE.
      />
    </div>
  );
};

export default Users;
