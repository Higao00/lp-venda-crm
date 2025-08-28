export type T_Post = {
    slug: string
    title: string
    description: string
    keywords: string[]
    image: {
        src: string
        alt: string
        layout: string
        width: number
        height: number
    }
    topics: {
        title: string
        content: string
    }[]
}
