import * as menu from '@zag-js/menu'
import { normalizeProps, useMachine } from '@zag-js/react'
import { useId } from 'react'
import { NAVIGATION } from '#utils/constants'

export function MobileMenu() {
  const [state, send] = useMachine(menu.machine({
    id: useId(),
    positioning: {
      placement: 'bottom-end',
    },
  }))

  const api = menu.connect(state, send, normalizeProps)

  return (
    <div>
      <button {...api.getTriggerProps()} className="relative h-8 cursor-pointer bg-gray-500 px-1.5 text-white">
        <span className="sr-only">Toggle menu</span>
        <div {...api.getIndicatorProps()} className="relative h-1 w-6 bg-current transition-colors duration-300 before:absolute before:-top-2 before:left-0 before:h-1 before:w-6 before:origin-center before:bg-current before:transition-all before:duration-300 after:absolute after:left-0 after:top-2 after:h-1 after:w-6 after:origin-center after:bg-current after:transition-all after:duration-300 data-[state=open]:bg-transparent before:data-[state=open]:top-0 before:data-[state=open]:rotate-45 after:data-[state=open]:top-0 after:data-[state=open]:-rotate-45"></div>
      </button>
      <div {...api.getPositionerProps()}>
        <div {...api.getContentProps()} className="hidden divide-y divide-gray-100 rounded-md border border-gray-100 bg-white p-1.5 shadow-lg data-[state=open]:block">
          {
            NAVIGATION.main.map(link => (
              <a
                className="block px-5 py-2.5 text-gray-500"
                key={link.url}
                href={link.url}
                {...api.getItemProps({ value: link.title })}
              >
                {link.title}
              </a>
            ))
          }
        </div>
      </div>
    </div>
  )
}
