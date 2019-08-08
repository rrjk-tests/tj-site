import { getProject } from 'theatre'
import state from './state.json'

export const project = getProject('Theatre Website', { state })

export const TLControlBox = project.getTimeline('Control Box')
export const TLEasyAnimation = project.getTimeline('Easy Animation / Bouncing Ball')

export const TLClickable = project.getTimeline('Fluid Animation / Clickable')
export const TLHoverable = project.getTimeline('Fluid Animation / Hoverable')
export const TLSeletable = project.getTimeline('Fluid Animation / Selectable')