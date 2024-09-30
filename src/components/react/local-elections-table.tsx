import * as React from 'react'
import {
  type SortDirection,
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  getSortedRowModel,
  useReactTable,
} from '@tanstack/react-table'
import clsx from 'clsx'
import type { LocalElectionData } from '#utils/types'

const defaultColumnVisibility = {
  county: true,
  city: true,
  type: true,
  website: true,
  drop: true,
  ballot: true,
  ballot_link: true,
  ballot_link_text: true,
}

export function LocalElectionsTable({ data, columnVisibility = defaultColumnVisibility }: {
  data: LocalElectionData[]
  columnVisibility?: Partial<typeof defaultColumnVisibility>
}) {
  const columnHelper = createColumnHelper<LocalElectionData>()
  const columns = [
    columnHelper.accessor('county', {
      header: 'County',
      sortingFn: 'basic',
    }),
    columnHelper.accessor('city', {
      header: 'City or town',
      sortingFn: 'basic',
    }),
    columnHelper.display({
      enableSorting: false,
      id: 'website',
      header: 'Website',
      cell: ({ row }) => row.original.website
        ? (
            <a className="text-[#2f7d95] underline hover:text-[#235e70]" href={row.original.website} target="_blank">
              {row.original.city}
              {' '}
              {row.original.type}
              {' '}
              website
            </a>
          )
        : null,
    }),
    columnHelper.accessor('drop', {
      enableSorting: false,
      header: 'Ballot drop box',
    }),
    columnHelper.accessor('ballot', {
      enableSorting: false,
      header: 'What\'s on the November 2024 ballot',
    }),
    columnHelper.display({
      enableSorting: false,
      id: 'ballot_link',
      header: 'Sample ballot or warrant',
      cell: ({ row }) => row.original.ballot_link
        ? <a className="text-[#2f7d95] underline hover:text-[#235e70]" href={row.original.ballot_link} target="_blank">{row.original.ballot_link_text}</a>
        : null,
    }),
  ]

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    initialState: {
      sorting: [{
        id: 'county',
        desc: false,
      }],
      columnVisibility: {
        ...defaultColumnVisibility,
        ...columnVisibility,
      },
    },
    enableMultiSort: false,
  })

  return (
    <table className="w-full">
      <thead>
        {table.getHeaderGroups().map(headerGroup => (
          <tr key={headerGroup.id}>
            {headerGroup.headers.map(header => (
              <th
                className={clsx([
                  'p-2 text-left text-sm',
                  header.column.getIsSorted() ? 'bg-neutral-100' : '',
                ])}
                key={header.id}
                aria-sort={header.column.getIsSorted() === 'asc'
                  ? 'ascending'
                  : header.column.getIsSorted() === 'desc'
                    ? 'descending'
                    : 'none'}
              >
                {header.column.getCanSort()
                  ? (
                      <button
                        onClick={header.column.getToggleSortingHandler()}
                        className="flex w-full cursor-pointer select-none items-center justify-between text-[#2f7d95]"
                      >
                        {header.isPlaceholder
                          ? null
                          : flexRender(
                            header.column.columnDef.header,
                            header.getContext(),
                          )}
                        <SortIcon sortDir={header.column.getIsSorted()} />
                      </button>
                    )
                  : (
                      <>
                        {header.isPlaceholder
                          ? null
                          : flexRender(
                            header.column.columnDef.header,
                            header.getContext(),
                          )}
                      </>
                    )}
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody>
        {table.getRowModel().rows.map(row => (
          <tr key={row.id}>
            {row.getVisibleCells().map(cell => (
              <td
                className={clsx([
                  'border-b p-2 text-left text-sm',
                  cell.column.getIsSorted() ? 'bg-neutral-50' : null,
                ])}
                key={cell.id}
              >
                {flexRender(cell.column.columnDef.cell, cell.getContext())}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  )
}

function SortIcon({ sortDir }: { sortDir: false | SortDirection }) {
  return (
    <span
      className={clsx([
        'size-3',
        sortDir === 'asc'
          ? 'icon-[fa6-solid--sort-up]'
          : sortDir === 'desc'
            ? 'icon-[fa6-solid--sort-down]'
            : 'icon-[fa6-solid--sort]',
      ])}
      aria-hidden="true"
    >
    </span>
  )
}
