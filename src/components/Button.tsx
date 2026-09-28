import type { ReactNode } from 'react'
import type { Variant } from './Alert'

interface ButtonProps {
  children: ReactNode
  variant?: Variant
  outline?: boolean
  disabled?: boolean
  onClick: () => void
}

function Button({
  children,
  variant = 'primary',
  outline = false,
  disabled = false,
  onClick,
}: ButtonProps) {
  return (
    <button
      type="button"
      className={`btn btn-${outline ? 'outline-' : ''}${variant}`}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  )
}

export default Button
