import {useAppDispatch} from "../../../services/hooks.ts";
import {useCallback, MutableRefObject} from "react";
import {moveIngredient} from "../../../services/slices/IngredientSlice.ts";
import {useDrag, useDrop} from "react-dnd";

export const useDragDrop = (ref: MutableRefObject<HTMLDivElement | null>, index: number, unique_id: string | number | undefined) => {
  const dispatch = useAppDispatch()

  const moveCard = useCallback((dragIndex: number, hoverIndex: number) => {
    dispatch(moveIngredient({dragIndex, hoverIndex}))
  }, [dispatch])

  const [{ }, drop] = useDrop({
    accept: "orderIngredient",
    collect(monitor) {
      return {
        handlerId: monitor.getHandlerId(),
      }
    },
    hover(item: any, monitor) {
      if (!ref.current) {
        return
      }
      const dragIndex = item.index
      const hoverIndex = index
      if (dragIndex === hoverIndex) {
        return
      }
      const hoverBoundingRect = ref.current?.getBoundingClientRect()
      const hoverMiddleY =
        (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2
      const clientOffset = monitor.getClientOffset()
      const hoverClientY = clientOffset!.y - hoverBoundingRect.top
      if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
        return
      }
      if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
        return
      }
      moveCard(dragIndex, hoverIndex)
      item.index = hoverIndex
    },
  })
  const [{ isDragging }, drag] = useDrag({
    type: "orderIngredient",
    item: () => {
      return { unique_id, index }
    },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  })
  const opacity = isDragging ? 0 : 1
  drag(drop(ref))

  return { opacity }
}