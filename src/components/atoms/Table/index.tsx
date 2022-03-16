/* eslint-disable react/destructuring-assignment */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import { Grid, _ } from 'gridjs-react';
import { PluginPosition } from 'gridjs';
import 'gridjs/dist/theme/mermaid.css';
import FilterPlugin from '../FilterPlugin';
import { useAppSelector } from '../../../helpers';

const Index = (props:any) => {
  const homeState = useAppSelector((state) => state.home);
  return (
    <Grid
      server={{
        url: `${process.env.REACT_APP_API_URL}${props.data?.url}${homeState.params === '' ? '?weq=qwe' : `?gender=${homeState.params.value}`}`,
        headers: {
          Accept: 'application/json',
        },
        then: (result) => result.results,
        total: () => 100,
      }}
      pagination={{
        enabled: true,
        limit: 10,
        server: {
          url: (prev, page, limit) => `${prev}&results=10&page=${page + 1}&pageSize=${limit}`,
        },
      }}
      search={props.search === false ? false
        : {
          server: {
            url: (prev, keyword) => `${prev}&keyword=${keyword}`,
          },
        }}
      sort={{
        multiColumn: false,
        server: {
          url: (prev, columns) => {
            if (!columns.length) return prev;

            const col = columns[0];
            const dir = col.direction === 1 ? 'ascend' : 'descend';
            const colName = props.data?.columns[col.index].sortName;

            return `${prev}&sortOrder=${colName}&sortBy=${dir}`;
          },
        },
      }}
      columns={props.data?.columns}
      resizable
      className={{
        paginationButton: '!py-[10px]',
        paginationSummary: '!py-[10px]',
        pagination: '!items-center',
        td: '!border-b !border-l-0 !border-r-0 !border-t-0 !bg-transparent',
        th: '!border-b !border-l-0 !border-r-0 !border-t-0 !bg-white hover:!bg-opacity-10',
        container: '!border-none !shadow-none',
        footer: ' !shadow-none !border-t !border-b-0',
        header: ' !shadow-none !border-0',
      }}
      // plugins={[{
      //   id: 'myplugin',
      //   component: () => _(<FilterPlugin />),
      //   position: PluginPosition.Header,
      //   order: 1,
      // }]}
    />
  );
};
function compare(prevProps:any, nextProps:any) {
  // console.log('prevProps', prevProps);
  // console.log('nextProps', nextProps);
  // return true;
  return JSON.stringify(prevProps) === JSON.stringify(nextProps);
}

export const Table = React.memo(Index, compare);
