import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../../Shared/Loading';
import MakeAdminRow from './MakeAdminRow';

const MakeAdmin = () => {
  const { data: users, isLoading, refetch } = useQuery('users', () => fetch('https://manufacturer-website-server.onrender.com/user').then(res => res.json()))
  if (isLoading) {
    return <Loading></Loading>
  }
  return (
    <div>
      <h1 className='text-2xl font-bold pt-3 pb-1'><u>Make Admin From Here: </u></h1>
      <div className="overflow-x-auto">
        <table className="table table-zebra w-full">
          <thead>
            <tr>
              <th></th>
              <th>Email</th>
              <th>Make Admin</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {
              users.map((user, index) => <MakeAdminRow
                key={user._id}
                index={index}
                user={user}
                refetch={refetch}
              ></MakeAdminRow>)
            }
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MakeAdmin;



