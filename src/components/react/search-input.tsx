import clsx from 'clsx'
import * as React from 'react'
import { searchValue } from '#utils/search-store'

export default function SearchInput({
  placeholder,
  className,
}: {
  placeholder?: string
  className?: string
}) {
  React.useEffect(() => {
    return () => {
      // Reset the search state to empty anytime the user navigates away from the current page
      searchValue.set('')
    }
  }, [])
  return (
    <input
      className={clsx(className, 'w-full border-b-2 p-1 text-lg [&::-webkit-search-cancel-button]:appearance-none')}
      type="search"
      onChange={e => searchValue.set(e.target.value)}
      placeholder={placeholder}
    />
  )
}
