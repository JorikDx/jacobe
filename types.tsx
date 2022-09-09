export type Pizza = {
    id: string
    name: string
    ingredients: string
    imageSource?: string
    price: number
    nickname: string
    vegan: boolean
} | null

export type TimeSlot = {
    id: string
    startTime : Date
    endTime: Date
    availablePizzas: number
}
