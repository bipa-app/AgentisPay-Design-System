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
  class="bipa-icon bipa-icon--agents {className}"
  aria-hidden={ariaLabel ? undefined : 'true'}
  aria-label={ariaLabel}
  role={ariaLabel ? 'img' : undefined}
  {...rest}
>
  <rect x="4" y="8" width="16" height="12" rx="2"/>
  <path d="M8 8V5a4 4 0 0 1 8 0v3"/>
  <circle cx="9" cy="14" r="1" fill="currentColor" stroke="none"/>
  <circle cx="15" cy="14" r="1" fill="currentColor" stroke="none"/>
  <path d="M9 18h6"/>
</svg>
