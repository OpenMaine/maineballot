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
      <button {...api.getTriggerProps()}>
        <span className="sr-only">Toggle menu</span>
        <span {...api.getIndicatorProps()}>Toggle menu</span>
      </button>
      <div className="bg-white shadow-lg" {...api.getPositionerProps()}>
        <div {...api.getContentProps()}>
          {
            NAVIGATION.main.map(link => (
              <a
                className="block"
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
