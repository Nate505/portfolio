'use client'

import { useEffect, useRef } from 'react'

export default function Marquee() {
  const marqueeRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const marqueeContent = marqueeRef.current
    if (!marqueeContent) return

    const initMarquee = () => {
      const items = Array.from(marqueeContent.children)

      items.forEach((item) => {
        const clone = item.cloneNode(true)
        marqueeContent.appendChild(clone)
      })
    
      let contentWidth = 0
      items.forEach((item) => {
        const elm = item as HTMLElement
        contentWidth += elm.offsetWidth + parseInt(getComputedStyle(elm).marginRight || '0')
      })

      let currentPosition = 0

      const animate = () => {
        currentPosition -= 1
        if (Math.abs(currentPosition) >= contentWidth) {
          currentPosition = 0
        }
        marqueeContent.style.transform = `translateX(${currentPosition}px)`
        requestAnimationFrame(animate)
      }

      animate()
    }

    const images = marqueeContent.querySelectorAll('img')
    let loadedCount = 0

    const onImageLoad = () => {
      loadedCount++
      if (loadedCount === images.length) {
        initMarquee()
      }
    }

    images.forEach((img) => {
      if (img.complete) {
        onImageLoad()
      } else {
        img.addEventListener('load', onImageLoad)
        img.addEventListener('error', onImageLoad)
      }
    })
  }, [])

  return (
    <div className="w-full bg-[#0E1219] overflow-hidden">
      <div
        ref={marqueeRef}
        className="flex whitespace-nowrap will-change-transform"
      >
        <div className="flex-none mr-5">
          <img src="/java.png" alt="Java Logo" className="h-[50vh] w-auto block object-contain" />
        </div>
        <div className="flex-none mr-5">
          <img src="/Javascript.png" alt="Javascript" className="h-[50vh] w-auto block object-contain" />
        </div>
        <div className="flex-none mr-5">
          <img src="/python.png" alt="python Logo" className="h-[50vh] w-auto block object-contain" />
        </div>
        <div className="flex-none mr-5">
          <img src="/react.png" alt="react logo" className="h-[50vh] w-auto block object-contain" />
        </div>
        <div className="flex-none mr-5">
          <img src="/typescript.png" alt="typescript logo" className="h-[50vh] w-auto block object-contain" />
        </div>
      </div>
    </div>
  )
}
