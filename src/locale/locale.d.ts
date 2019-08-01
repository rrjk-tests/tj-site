interface IInfo {
    title: string[],
    description: string[]
}

interface ISection {
    info: IInfo
    [key: string]: any
}

interface IFooterSection {
    title: string,
    description: string
}

type TSections = {[key: string]: ISection}
type TFooterSections = IFooterSection[]