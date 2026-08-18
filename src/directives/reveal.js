// v-reveal: a small, dependency-free scroll-reveal directive.
// Adds "is-visible" to an element once it scrolls into view, so CSS in
// main.css can transition it in. Falls back to instantly visible for
// browsers without IntersectionObserver support and respects users who
// have asked for reduced motion.
const prefersReducedMotion =
  typeof window !== 'undefined' &&
  window.matchMedia &&
  window.matchMedia('(prefers-reduced-motion: reduce)').matches

const observer =
  typeof IntersectionObserver !== 'undefined'
    ? new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('is-visible')
              observer.unobserve(entry.target)
            }
          })
        },
        { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
      )
    : null

export const revealDirective = {
  mounted(el) {
    el.classList.add('reveal')
    if (prefersReducedMotion || !observer) {
      el.classList.add('is-visible')
      return
    }
    observer.observe(el)
  },
  unmounted(el) {
    if (observer) observer.unobserve(el)
  }
}
