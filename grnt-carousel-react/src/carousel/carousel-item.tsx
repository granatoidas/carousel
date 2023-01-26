export interface CarouselItemData {
  content: React.ReactNode
}

interface CarouselItemProps {
  item: CarouselItemData
}

export function CarouselItem({ item }: CarouselItemProps) {
  return <div className="w-full h-full">{item.content}</div>
}
