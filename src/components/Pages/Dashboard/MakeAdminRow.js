import React from 'react';

const MakeAdminRow = ({user,index}) => {
    const {email}= user
    return (
        <tr>
              <th>{index+1}</th>
              <td>Cy Ganderton</td>
              <td>{email}</td>
              <td>Blue</td>
            </tr>
    );
};

export default MakeAdminRow;