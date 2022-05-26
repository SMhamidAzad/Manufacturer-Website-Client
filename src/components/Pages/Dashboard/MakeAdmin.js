import React from 'react';
import { useQuery } from 'react-query';
import MakeAdminRow from './MakeAdminRow';

const MakeAdmin = () => {
  const { data: users, isLoading } = useQuery('users', () => fetch('http://localhost:5000/user').then(res => res.json()))
  if (isLoading) {
    return <p>Loading....</p>
  }
  return (
    <div>
      <h1>Make Admin here: {users.length}</h1>
      <div class="overflow-x-auto">
        <table class="table table-zebra w-full">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Email</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {
              users.map((user, index) => <MakeAdminRow
              key={user._id}
              index={index}
              user={user}
              ></MakeAdminRow>)
            }
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MakeAdmin;


