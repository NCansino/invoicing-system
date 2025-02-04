import { Users } from '@/modules/users';
import { PageHeader } from '@/shared/components/partials';
import { ROUTES } from '@/shared/constants/routes';

const UsersPage = () => {
  return (
    <div className="mb-20 mt-12 space-y-12">
      <PageHeader title="Users" btnLabel="Add users" withIcon navigateTo={ROUTES.Users + '/new'} />

      <Users />
    </div>
  );
};

export default UsersPage;
