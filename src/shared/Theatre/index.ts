import { getProject } from 'theatre'
import state from './state.json'

export const project = getProject('Theatre Website', { state })

export const TLControlBox = project.getTimeline('Control Box')
export const TLEasyAnimation = project.getTimeline('Easy Animation / Bouncing Ball')