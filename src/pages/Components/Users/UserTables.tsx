import Breadcrumb from '../../../components/Breadcrumbs/Breadcrumb';
import UsersTable from './UsersTable';

function UserTables() {
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

}

export default UserTables