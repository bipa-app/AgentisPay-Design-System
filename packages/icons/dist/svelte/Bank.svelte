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
  class="bipa-icon bipa-icon--bank {className}"
  aria-hidden={ariaLabel ? undefined : 'true'}
  aria-label={ariaLabel}
  role={ariaLabel ? 'img' : undefined}
  {...rest}
>
  <line x1="3" y1="21" x2="21" y2="21"/>
  <line x1="3" y1="10" x2="21" y2="10"/>
  <polyline points="5 10 5 21"/>
  <polyline points="19 10 19 21"/>
  <polyline points="9 10 9 21"/>
  <polyline points="15 10 15 21"/>
  <path d="M3 10L12 3l9 7"/>
</svg>
