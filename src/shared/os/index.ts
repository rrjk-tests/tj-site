import { osName } from 'react-device-detect'

const uglyScrollOSes = ['windows']

export const useScrollbarCheck = () => {
    const os = osName.toLowerCase()
    return !uglyScrollOSes.includes(os)
}