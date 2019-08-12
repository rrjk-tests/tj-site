import React, {createContext} from "react"
import {Scrollbars} from "react-custom-scrollbars"

import "./style.scss"

interface IAction {
  type: string
  payload: number
}

interface IProps {
  onScroll?: (e: any) => void
  children: JSX.Element
}
export default function ScrollBar({onScroll, ...props}: IProps) {
  return (
    <Scrollbars
      onScroll={onScroll}
      renderThumbVertical={(p: any) => (
        <div {...p} className="scrollbar__thumb-vertical" />
      )}
      autoHide
      autoHideTimeout={1000}
      autoHideDuration={200}
      thumbMinSize={30}
      universal={true}
      {...props}
    />
  )
}

export const ScrollContext = createContext<number>(0)
