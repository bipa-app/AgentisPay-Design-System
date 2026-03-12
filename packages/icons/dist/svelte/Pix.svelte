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
  class="bipa-icon bipa-icon--pix {className}"
  aria-hidden={ariaLabel ? undefined : 'true'}
  aria-label={ariaLabel}
  role={ariaLabel ? 'img' : undefined}
  {...rest}
>
  <path d="M5.5 5.5L12 2l6.5 3.5v9L12 18l-6.5-3.5v-9z"/>
  <path d="M12 2v16M5.5 5.5l6.5 3.5 6.5-3.5"/>
  <path d="M5.5 14.5L12 11l6.5 3.5"/>
  <circle cx="12" cy="21" r="1.5" fill="currentColor" stroke="none"/>
</svg>
