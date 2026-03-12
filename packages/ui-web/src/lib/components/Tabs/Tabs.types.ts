export interface TabItem {
  label: string;
  value?: string;
  count?: number;
  disabled?: boolean;
}

export interface TabsProps {
  /** Tab items to render. */
  items: TabItem[];
  /** Index of the active tab (bindable). @default 0 */
  active?: number;
  class?: string;
  /** Called when the active tab changes. */
  onchange?: (item: TabItem, index: number) => void;
}
