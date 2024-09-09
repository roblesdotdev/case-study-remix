import { type SVGProps } from 'react'
import iconsHref from './icons/sprite.svg'
import { type IconName } from '@/icon-name'

export { iconsHref }
export { IconName }

export function Icon({
  name,
  ...props
}: SVGProps<SVGSVGElement> & {
  name: IconName
}) {
  return (
    <svg {...props}>
      <use href={`${iconsHref}#${name}`} />
    </svg>
  )
}
