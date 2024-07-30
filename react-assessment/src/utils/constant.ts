export interface FilterOptions{
    title:string
    id:string
}

export const CategoryFilter:FilterOptions[] = [
    {
        title:"Benzinga",
        id:"benzinga"
    },
    {
        title:"Lambda",
        id:"lambda"
    },
    {
        title:"Delta",
        id:"delta"
    },
    {
        title:"Gamma",
        id:"gamma"
    }
]

export const AuthorFilter:FilterOptions[] = [
    {
        title:"Benzinga Neuro",
        id:"benzinganeuro"
    },
    {
        title:"Werder Helmner",
        id:"werderhelmner"
    },
    {
        title:"Patrick Wilson",
        id:"patrickwilson"
    },
]

export const SortBy:FilterOptions[] = [
    {
        title:"Date",
        id:"date"
    },
    {
        title:"Title",
        id:"title"
    },
]