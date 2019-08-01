interface ISection {
    title: string[],
    description: string
}

type TSections = {[key: string]: ISection}

interface ILocale {
    sections: TSections
}