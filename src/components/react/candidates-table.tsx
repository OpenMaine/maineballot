import {
  type SortDirection,
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  getSortedRowModel,
  useReactTable,
} from '@tanstack/react-table'
import clsx from 'clsx'
import type { CandidateData } from '#utils/types'

const defaultColumnVisibility = {
  Office: true,
  Dist: true,
  Party: true,
  fullName: true,
  ballotpedia: true,
  website: true,
  comparison: true,
}

export function CandidatesTable({ data, columnVisibility = defaultColumnVisibility }: {
  data: CandidateData[]
  columnVisibility?: Partial<typeof defaultColumnVisibility>
}) {
  const columnHelper = createColumnHelper<CandidateData>()
  const columns = [
    columnHelper.accessor(row => `${row.FirstName} ${row.LastName}`, {
      id: 'fullName',
      header: 'Candidate',
      enableSorting: true,
    }),
    columnHelper.accessor('Office', {
      header: 'Office',
    }),
    columnHelper.accessor('Dist', {
      header: 'District',
      enableSorting: true,
    }),
    columnHelper.accessor('Party', {
      header: 'Party',
      enableSorting: true,
    }),
    columnHelper.display({
      id: 'ballotpedia',
      header: 'Ballotpedia',
      cell: ({ row }) => row.original.ballotpedia ? <a className="text-[#2f7d95] underline hover:text-[#235e70]" href={row.original.ballotpedia}>Ballotpedia page</a> : null,
    }),
    columnHelper.display({
      id: 'website',
      header: 'Website',
      cell: ({ row }) => row.original.ballotpedia ? <a className="text-[#2f7d95] underline hover:text-[#235e70]" href={row.original.ballotpedia}>Campaign website</a> : null,
    }),
    // columnHelper.display({
    //   id: 'comparison',
    //   header: 'Comparison',
    //   cell: ({ row }) => row.original.comparison ? <a className="text-[#2f7d95] underline hover:text-[#235e70]" href={row.original.comparison}>{row.original.comparison_text}</a> : null,
    // }),
  ]

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    initialState: {
      sorting: [{
        id: 'fullName',
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
                aria-sort={header.column.getCanSort()
                  ? undefined
                  : header.column.getIsSorted() === 'asc'
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
