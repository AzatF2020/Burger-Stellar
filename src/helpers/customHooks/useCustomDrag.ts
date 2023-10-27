import {useDrag} from "react-dnd";

export const useCustomDrag = (itemType: string, item: any) => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: itemType,
    item: { item },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
      handlerId: monitor.getHandlerId(),
    }),
  }))

  return {isDragging, drag}
}