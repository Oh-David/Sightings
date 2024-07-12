export interface AddProductRequest
{
    name: string
    image: string
    description: string
    tradeFor: string
    categoryId: number
    condition: string
    location: string
    ownerId: string
    dimensionsWidth: number
    dimensionsHeight: number
    dimensionsDepth: number
    dimensionsWeight: number
    dateListed: string
}