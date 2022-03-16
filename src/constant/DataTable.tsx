/* eslint-disable @typescript-eslint/no-explicit-any */
import Moment from 'moment';
import { _ } from 'gridjs-react';

const users = () => {
  const data = {
    url: '/api',
    // params: '',
    columns: [
      {
        id: 'username',
        sortName: 'username',
        name: 'Username',
        data: (row:any) => row.login.username,
        width: '100%',
      },
      {
        id: 'name',
        sortName: 'name',
        name: 'Name',
        data: (row:any) => `${row.name.first} ${row.name.last}`,
        width: '100%',
      },
      {
        id: 'email',
        sortName: 'email',
        name: 'Email',
        width: '100%',
      },
      {
        id: 'gender',
        sortName: 'gender',
        name: 'Gender',
        width: '100%',
      },
      {
        id: 'registered_date',
        sortName: 'registered_date',
        name: 'Registered Date',
        data: (row:any) => row.registered.date,
        formatter: (cell:any) => _(<div>{ Moment(cell).format('DD-MM-YYYY hh:mm') }</div>),
        width: '100%',
      },
    ],
  };
  return data;
};

export {
  users,
};
