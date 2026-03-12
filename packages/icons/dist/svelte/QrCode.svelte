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
  class="bipa-icon bipa-icon--qr-code {className}"
  aria-hidden={ariaLabel ? undefined : 'true'}
  aria-label={ariaLabel}
  role={ariaLabel ? 'img' : undefined}
  {...rest}
>
  <rect x="3" y="3" width="7" height="7"/>
  <rect x="14" y="3" width="7" height="7"/>
  <rect x="3" y="14" width="7" height="7"/>
  <rect x="14" y="14" width="3" height="3"/>
  <line x1="21" y1="14" x2="21" y2="14.01"/>
  <line x1="18" y1="21" x2="18" y2="21.01"/>
  <line x1="21" y1="18" x2="21" y2="21"/>
  <line x1="5" y1="5" x2="5" y2="5.01"/>
  <line x1="19" y1="5" x2="19" y2="5.01"/>
  <line x1="5" y1="19" x2="5" y2="19.01"/>
</svg>
