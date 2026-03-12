<script lang="ts">
  import type { InputProps } from './Input.types';

  let {
    label,
    placeholder = '',
    value       = $bindable(''),
    type        = 'text',
    error,
    helper,
    disabled    = false,
    required    = false,
    id,
    name,
    class: className = '',
    oninput,
    onchange,
    ...rest
  }: InputProps = $props();

  const inputId = $derived(id ?? `w-input-${Math.random().toString(36).slice(2, 7)}`);
</script>

<div class="w-field {className}">
  {#if label}
    <label class="w-field__label" for={inputId}>
      {label}
      {#if required}<span class="w-field__required" aria-hidden="true">*</span>{/if}
    </label>
  {/if}

  <input
    {type}
    {placeholder}
    {disabled}
    {required}
    {name}
    id={inputId}
    class="w-input {error ? 'w-input--error' : ''}"
    aria-invalid={!!error}
    aria-describedby={error || helper ? `${inputId}-desc` : undefined}
    bind:value
    {oninput}
    {onchange}
    {...rest}
  />

  {#if error}
    <span id="{inputId}-desc" class="w-field__msg w-field__msg--error" role="alert">{error}</span>
  {:else if helper}
    <span id="{inputId}-desc" class="w-field__msg">{helper}</span>
  {/if}
</div>

<style>
  .w-field { display: flex; flex-direction: column; gap: 6px; }

  .w-field__label {
    font-family: var(--font-sans, 'Space Grotesk', sans-serif);
    font-size: 13px;
    font-weight: 500;
    color: var(--color-text-secondary, #8A9BB0);
  }

  .w-field__required { color: var(--color-brand-orange, #FF5500); margin-left: 2px; }

  .w-input {
    width: 100%;
    height: 42px;
    padding: 0 14px;
    background: var(--color-bg-elevated, #161F2A);
    border: 1px solid var(--color-border-strong, #263545);
    border-radius: var(--radius-input, 10px);
    color: var(--color-text-primary, #fff);
    font-family: var(--font-sans, 'Space Grotesk', sans-serif);
    font-size: 14px;
    outline: none;
    transition: border-color var(--motion-duration-fast, 150ms) var(--motion-easing-out, ease),
                box-shadow   var(--motion-duration-fast, 150ms) var(--motion-easing-out, ease);
    box-sizing: border-box;
  }

  .w-input::placeholder { color: var(--color-text-tertiary, #4A6070); }

  .w-input:focus {
    border-color: var(--color-brand-orange, #FF5500);
    box-shadow: 0 0 0 3px var(--color-brand-orange-bg, rgba(255,85,0,0.08));
  }

  .w-input:disabled {
    opacity: 0.4;
    cursor: not-allowed;
  }

  .w-input--error {
    border-color: var(--color-semantic-danger, #C03A2B);
    box-shadow: 0 0 0 3px var(--color-semantic-danger-bg, rgba(192,58,43,0.08));
  }

  .w-field__msg {
    font-size: 12px;
    color: var(--color-text-secondary, #8A9BB0);
  }
  .w-field__msg--error { color: var(--color-semantic-danger-fg, #E05040); }
</style>
