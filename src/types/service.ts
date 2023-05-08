export type ServiceType = {
    id?: string
    name?: string,
    description?: string,
    author?: string,
    price?: number,
    likes?: number,
    dislikes?: number,
    created_at?: string,
    update_at?: string,
    comments?: Array<CommentType>,
}

export type CommentType = {
    id?: string
    text: string,
    created_at?: string,
    update_at?: string,
}