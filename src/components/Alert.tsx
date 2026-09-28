import type { ReactNode } from 'react'

export type Variant =
  | 'primary'
  | 'secondary'
  | 'success'
  | 'danger'
  | 'warning'
  | 'info'
  | 'light'
  | 'dark'

interface AlertProps {
  children: ReactNode
  variant?: Variant
  onClose?: () => void
}

function Alert({ children, variant = 'primary', onClose }: AlertProps) {
  return (
    <div
      className={`alert alert-${variant}${onClose ? ' alert-dismissible' : ''}`}
      role="alert"
    >
      {children}
      {onClose && (
        <button
          type="button"
          className="btn-close"
          aria-label="Close"
          onClick={onClose}
        />
      )}
    </div>
  )
}

export default Alert
