export type ToastVariant  = 'default' | 'success' | 'danger' | 'warning';
export type ToastPosition = 'bottom-right' | 'bottom-left' | 'top-right' | 'top-left' | 'top-center' | 'bottom-center';

export interface ToastProps {
  /** The message to display. */
  message: string;
  /** Visual variant. @default 'default' */
  variant?: ToastVariant;
  /** Auto-dismiss duration in ms. Set to 0 to disable. @default 4000 */
  duration?: number;
  /** Screen position. @default 'bottom-right' */
  position?: ToastPosition;
  /** Controls visibility (bindable). @default true */
  visible?: boolean;
  /** Called when the toast is dismissed. */
  ondismiss?: () => void;
}
