import Breadcrumb from '../components/Breadcrumbs/Breadcrumb';

import UsersTable from './Components/Users/UsersTable';

const Tables = () => {
  return (
    <>
      <Breadcrumb pageName="Users" />

      <div className="flex flex-col gap-10">
        {/* <TableOne /> */}
        {/* <TableTwo /> */}
        <UsersTable />
      </div>
    </>
  );
};

export default Tables;
