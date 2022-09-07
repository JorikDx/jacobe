export type Pizza = {
    name: string
    ingredients: string
    imageSource?: string
    price: number
    nickname: string
    vegan: boolean
}

export type TimeSlot = {
    startTime : Date
    endTime: Date
    availablePizzas: number
}
