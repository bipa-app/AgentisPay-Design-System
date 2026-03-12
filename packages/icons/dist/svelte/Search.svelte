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
  class="bipa-icon bipa-icon--search {className}"
  aria-hidden={ariaLabel ? undefined : 'true'}
  aria-label={ariaLabel}
  role={ariaLabel ? 'img' : undefined}
  {...rest}
>
  <circle cx="11" cy="11" r="8"/>
  <line x1="21" y1="21" x2="16.65" y2="16.65"/>
</svg>
