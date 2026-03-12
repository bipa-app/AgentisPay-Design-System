export interface TableColumn {
  /** Key to read from row objects. */
  key: string;
  /** Header label. */
  label: string;
  /** Text alignment. @default 'left' */
  align?: 'left' | 'center' | 'right';
  /** Optional fixed width (e.g. '120px'). */
  width?: string;
}

export interface TableProps {
  columns: TableColumn[];
  /** Array of row objects. Keys must match column keys. */
  rows: Record<string, unknown>[];
  /** Show skeleton loading state. @default false */
  loading?: boolean;
  /** Message shown when rows is empty. */
  empty?: string;
  class?: string;
}
