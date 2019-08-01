interface IInfo {
    title: string[],
    description: string[]
}

interface ISection {
    info: IInfo
    [key: string]: any
}
type TSections = {[key: string]: ISection}

interface IFooterSection {
    title: string,
    description: string
}

interface ILocale {
    sections: TSections
}