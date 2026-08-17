/**
 * Combines class names, filtering out falsy values.
 * @param  {...(string|false|null|undefined)} classes
 * @returns {string}
 */
export function cx(...classes) {
  return classes.filter(Boolean).join(" ");
}

/**
 * Smooth-scrolls to an element by id, accounting for a sticky header.
 * @param {string} id - target element id, without the leading "#"
 * @param {number} [offset=80] - px to offset for a sticky header
 */
export function scrollToId(id, offset = 80) {
  const el = document.getElementById(id);
  if (!el) return;
  const top = el.getBoundingClientRect().top + window.scrollY - offset;
  window.scrollTo({ top, behavior: "smooth" });
}

/**
 * Validates an email address with a pragmatic (not fully RFC 5322) regex.
 * @param {string} email
 * @returns {boolean}
 */
export function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

/**
 * Formats a number with locale-aware thousands separators.
 * Used by the animated stats counter.
 * @param {number} value
 * @returns {string}
 */
export function formatNumber(value) {
  return new Intl.NumberFormat("en-US").format(Math.round(value));
}

/**
 * Clamps a number between a minimum and maximum.
 * @param {number} value
 * @param {number} min
 * @param {number} max
 * @returns {number}
 */
export function clamp(value, min, max) {
  return Math.min(Math.max(value, min), max);
}

/**
 * Debounces a function by the given delay in milliseconds.
 * @param {Function} fn
 * @param {number} [delay=200]
 * @returns {Function}
 */
export function debounce(fn, delay = 200) {
  let timeoutId;
  return (...args) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => fn(...args), delay);
  };
}
