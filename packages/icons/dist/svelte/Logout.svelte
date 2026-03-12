<script lang="ts">
  let {
    size   = 24,
    color  = 'currentColor',
    class: className = '',
    'aria-label': ariaLabel,
    ...rest
  }: {
    size?:       number | string;
    color?:      string;
    class?:      string;
    'aria-label'?: string;
    [key: string]: unknown;
  } = $props();
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 24 24"
  width={size}
  height={size}
  fill="none"
  stroke={color}
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
  class="bipa-icon bipa-icon--logout {className}"
  aria-hidden={ariaLabel ? undefined : 'true'}
  aria-label={ariaLabel}
  role={ariaLabel ? 'img' : undefined}
  {...rest}
>
  <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/>
  <polyline points="16 17 21 12 16 7"/>
  <line x1="21" y1="12" x2="9" y2="12"/>
</svg>
