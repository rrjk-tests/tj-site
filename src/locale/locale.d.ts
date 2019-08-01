interface ISection {
    title: string[],
    description: string[]
}
type TSections = {[key: string]: ISection}

interface IFooterSection {
    title: string,
    description: string
}

interface ILocale {
    sections: TSections
}