/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useCallback, useState } from 'react';
import { Table } from '../../components/atoms/Table';
import { DataTable } from '../../constant';

function Index():JSX.Element {
  const [reRender] = useState<boolean>(false);
  const dataUser:any = DataTable.users();

  const callBackFunction = useCallback(dataUser, [dataUser]);
  return (
    <div className="w-screen min-h-screen py-12">
      <div className="container mx-auto h-full">
        <h1 className="font-bold text-3xl mb-2">Example With Search And Filter</h1>
        <Table data={callBackFunction} reRender={reRender} />
      </div>
    </div>
  );
}

export default Index;
