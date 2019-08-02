import React, { Component } from 'react'
import { Scrollbars } from 'react-custom-scrollbars';
 
import './style.scss'

export default class ScrollBar extends Component {
  render() {
    return (
      <Scrollbars
        renderThumbVertical={(props: any) => <div {...props} className="scrollbar__thumb-vertical"/>}
        autoHide
        autoHideTimeout={1000}
        autoHideDuration={200}
        thumbMinSize={30}
        universal={true}
        {...this.props} />
    )
  }
}