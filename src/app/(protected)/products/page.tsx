import { Products } from '@/modules/products';
import { PageHeader } from '@/shared/components/partials';
import { ROUTES } from '@/shared/constants/routes';

const ProductsPage = () => {
  return (
    <div className="mb-20 mt-12 space-y-12">
      <PageHeader
        title="Products"
        btnLabel="Add products"
        withIcon
        navigateTo={ROUTES.Products + '/new'}
      />

      <Products />
    </div>
  );
};

export default ProductsPage;
