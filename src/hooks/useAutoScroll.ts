import { useEffect, useRef } from 'react'

const SPEED = 40 // px per second

export const useAutoScroll = <T extends HTMLElement>(paused: boolean) => {
  const ref = useRef<T>(null)

  useEffect(() => {
    const el = ref.current
    if (!el || paused) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    let position = el.scrollLeft
    let direction = 1
    let last = performance.now()
    let frame: number

    const step = (now: number) => {
      const max = el.scrollWidth - el.clientWidth
      position += direction * SPEED * ((now - last) / 1000)
      last = now

      if (position >= max) {
        position = max
        direction = -1
      } else if (position <= 0) {
        position = 0
        direction = 1
      }

      el.scrollLeft = position
      frame = requestAnimationFrame(step)
    }

    frame = requestAnimationFrame(step)
    return () => cancelAnimationFrame(frame)
  }, [paused])

  return ref
}
