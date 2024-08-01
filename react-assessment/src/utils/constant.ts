export interface FilterOptions{
    title:string
    id:string
    type:string
}

export const CategoryFilter:FilterOptions[] = [
    {
        title:"Benzinga",
        id:"benzinga",
        type:"category"
    },
    {
        title:"Lambda",
        id:"lambda",
        type:"category"
    },
    {
        title:"Delta",
        id:"delta",
        type:"category"
    },
    {
        title:"Gamma",
        id:"gamma",
        type:"category"
    }
]

export const AuthorFilter:FilterOptions[] = [
    {
        title:"Benzinga Neuro",
        id:"benzinganeuro",
        type:"author"
    },
    {
        title:"Werder Helmner",
        id:"werderhelmner",
        type:"author"
    },
    {
        title:"Patrick Wilson",
        id:"patrickwilson",
        type:"author"
    },
]

export const SortBy:FilterOptions[] = [
    {
        title:"Date",
        id:"date",
        type:"sortBy"
    },
    {
        title:"Title",
        id:"title",
        type:"sortBy"
    },
]