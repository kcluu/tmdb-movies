import { useEffect, useRef } from 'react'

const SPEED = 40 // px per second

// Scrolls an element horizontally until it reaches the end
export const useAutoScroll = <T extends HTMLElement>(paused: boolean) => {
  const ref = useRef<T>(null)

  useEffect(() => {
    const el = ref.current
    if (!el || paused) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    // 1px tolerance since scrollLeft can land a fraction short of the max
    const hasScrolledToEnd = () => el.scrollLeft >= el.scrollWidth - el.clientWidth - 1
    if (hasScrolledToEnd()) return

    let position = el.scrollLeft
    let last = performance.now()
    let frame: number

    const step = (now: number) => {
      const max = el.scrollWidth - el.clientWidth
      position += SPEED * ((now - last) / 1000)
      last = now

      if (position >= max) {
        el.scrollLeft = max
        return
      }

      el.scrollLeft = position
      frame = requestAnimationFrame(step)
    }

    frame = requestAnimationFrame(step)
    return () => cancelAnimationFrame(frame)
  }, [paused])

  return ref
}
