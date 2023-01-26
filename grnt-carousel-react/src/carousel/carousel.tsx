import React, { useEffect, useState } from 'react'
import { CarouselItem } from './carousel-item'

interface CarouselItem {
  content: React.ReactNode
}

interface CarouselProps {
  items: CarouselItem[]
  className?: string
  autoDelayMs?: number
}

export function Carousel({ items, className, autoDelayMs }: CarouselProps) {
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [autoSwitchTimeout, setAutoSwitchTimeout] = useState<ReturnType<typeof setTimeout>>()
  const handleItemSelect = (i: number) => setSelectedIndex(i)

  useEffect(() => {
    if (!autoDelayMs) return

    if (autoSwitchTimeout) clearTimeout(autoSwitchTimeout)

    const timeout = setTimeout(() => {
      let nextIndex = selectedIndex + 1
      if (items.length === nextIndex) nextIndex = 0
      setSelectedIndex(nextIndex)
    }, autoDelayMs)

    setAutoSwitchTimeout(timeout)
  }, [autoDelayMs, selectedIndex])

  return (
    <div
      className={`w-full h-full
                rounded-lg border-2 border-gray-500
                overflow-hidden relative ${className}`}
    >
      <CarouselItem item={items[selectedIndex]} />
      <Buttons items={items} selectedIndex={selectedIndex} handleSelectItem={handleItemSelect} />
    </div>
  )
}

function Buttons({ items, selectedIndex, handleSelectItem }: CarouselProps & { handleSelectItem: (i: number) => void; selectedIndex: number }) {
  return (
    <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1">
      {items.map((_, i) => {
        const active = i === selectedIndex
        return <SelectItemButton active={active} onClick={() => handleSelectItem(i)} />
      })}
    </div>
  )
}

function SelectItemButton({ active, onClick }: { active?: boolean; onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className={`block bg-none outline-none
                    m-0 p-0 border-none
                    w-2 h-2 rounded-xl
                    ${active ? 'bg-fuchsia-600' : 'bg-amber-600'}
                    hover:bg-amber-300 focus-visible:bg-amber-300`}
    />
  )
}
